<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\PricingOption;
use App\Models\PricingPlan;
use App\Models\Region;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Stripe\Checkout\Session;
use Stripe\Stripe;

use function Laravel\Prompts\search;

class AnnouncementsController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->all();

        $announcements = Announcement::query()
            ->with(['company', 'category', 'region'])
            ->when(isset($filters['type']) && $filters['type'] !== '', function ($query) use ($filters) {
                $query->where('vacancy_type', '=', $filters['type']);
            })
            ->when(isset($filters['region']) && $filters['region'] !== '', function ($query) use ($filters) {
                $query->whereHas('region', function ($q) use ($filters) {
                    $q->where('region', '=', $filters['region']);
                });
            })
            ->when(isset($filters['category']) && $filters['category'] !== '', function ($query) use ($filters) {
                $query->whereHas('category', function ($q) use ($filters) {
                    $q->where('name', '=', $filters['category']);
                });
            })
            ->when(isset($filters['search']) && $filters['search'] !== '', function ($query) use ($filters) {
                $query->where('title', 'like', '%' . $filters['search'] . '%');
            })
            ->latest()
            ->paginate(10);

        $regions = Region::query()->with('cities')->orderBy('region', 'desc')->get();
        $categories = Category::query()->orderBy('name', 'desc')->get();

        return inertia('Dashboard', compact(['announcements', 'regions', 'categories', 'filters']));
    }

    public function show(Announcement $announcement)
    {
        $announcement = Announcement::query()->with('company')->first();
        return inertia('Announcements/Show', compact('announcement'));
    }

    public function create()
    {
        $pricing = PricingOption::query()->with('plan')->orderBy('id', 'asc')->get();
        $categories = Category::query()->orderBy('id', 'asc')->get();

        return inertia('Announcements/Create', compact(['pricing', 'categories']));
    }

    public function store(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $validatedData = $request->validate([
            'identicalCode' => 'required|digits:11',
            'fullname' => 'required|string|max:255',
            'phone' => 'required|string|min:9|max:15',
            'email' => 'required|email|max:255',
            'announcementName' => 'required|string|max:255',
            'salary' => 'nullable|numeric|min:0',
            'employement_type' => 'required|in:part,full',
            'category_id' => 'required|exists:categories,id',
            'vacancy_type' => 'required|in:vacancy,stipend,trainings',
            'comment' => 'nullable|string',
            'description' => 'required|string',
            'location' => 'required|string',
            'product' => 'required|string',
            'file' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // dd($validatedData['category']);

        // $categories = Category::query()->where('name', '=', $validatedData['category'])->first();

        // dd($categories);
        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'gel',
                    'product_data' => [
                        'name' => 'Jop Posting Service',
                    ],
                    'unit_amount' => $this->calculatePrice($validatedData['product']),
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('payment.success'),
            'cancel_url' => route('payment.cancel'),
        ]);


        $announcement = Announcement::create([
            'title' => $validatedData['announcementName'],
            'description' => $validatedData['description'],
            'location' => $validatedData['location'],
            'salary' => $validatedData['salary'],
            'employment_type' => $validatedData['employement_type'],
            'category_id' => $validatedData['category_id'],
            'author_id' => Auth::user()->id,
            'company_id' => Auth::user()->companies[0]->id
        ]);

        Transaction::create([
            'identical_code' => $validatedData['identicalCode'],
            'phone' => $validatedData['phone'],
            'transaction_id' => $session['id'],
            'status' => 'pending',
            'amount' => $this->calculatePrice($validatedData['product']),
            'payment_method' => 'Stripe',
            'currency' => 'GEL',
            'paid_at' => now(),
            'user_id' => Auth::user()->id,
            'announcement_id' => $announcement->id
        ]);

        return Inertia::location($session->url);
    }

    public function success()
    {

        return inertia('Payment/Success');
    }

    public function cancel()
    {
        return inertia('Payment/Cancel');
    }

    private function calculatePrice($price)
    {
        if (!is_numeric($price)) {
            throw new \InvalidArgumentException('The price must be a valid number.');
        }

        $price = floatval($price);

        $conversionRate = 0.35;

        $usdPrice = $price * $conversionRate;

        if ($usdPrice < 0.50) {
            throw new \Exception('The amount is too low. Please set a higher price.');
        }

        return intval($price * 100);
    }
}
