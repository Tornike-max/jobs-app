<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\PricingOption;
use App\Models\PricingPlan;
use App\Models\Region;
use Illuminate\Http\Request;

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
        $validatedData = $request->validate([
            'identicalCode' => 'required|digits:11',
            'fullname' => 'required|string|max:255',
            'phone' => 'required|string|min:9|max:15',
            'email' => 'required|email|max:255',
            'announcementName' => 'required|string|max:255',
            'salary' => 'nullable|numeric|min:0',
            'employement_type' => 'required|in:part,full',
            'category' => 'required|exists:categories,id',
            'vacancy_type' => 'required|in:vacancy,stipend,trainings',
            'comment' => 'nullable|string',
            'description' => 'required|string',
            'product' => 'required|string',
            'file' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        dd($validatedData);
    }
}
