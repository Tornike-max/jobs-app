<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\Company;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function index()
    {
        $announcementsCount = Announcement::query()->get()->count();
        $latestAnnouncementsCount = Announcement::query()->latest()->take(5)->get()->count();
        $activeUsers = User::query()->get()->count();
        $transactions = Transaction::query()->latest()->get();
        $categories = Category::query()->orderBy('name', 'desc')->get();
        $transactionsCount = 0;


        $announcements = Announcement::query()->with(['author', 'transaction', 'category'])->latest()->take(10)->get();

        $dateData = Announcement::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->groupBy('created_at')
            ->pluck('total', 'date');

        $companies = Company::query()->latest()->paginate(10);

        foreach ($transactions as $transaction) {
            $transactionsCount += $transaction['amount'];
        }

        return inertia('Admin/Index', compact(['announcementsCount', 'latestAnnouncementsCount', 'activeUsers', 'transactionsCount', 'announcements', 'dateData', 'companies', 'categories']));
    }

    public function editAnnouncement(Announcement $announcement)
    {
        return inertia('Admin/Announcement/Edit', compact('announcement'));
    }

    public function updateAnnouncement(Announcement $announcement, Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'nullable|string',
            'description' => 'nullable|string',
            'end_date' => 'nullable',
            'salary' => 'nullable|string',
            'employment_type' => 'nullable|string',
            'vacancy_type' => 'nullable|string'
        ]);

        $announcement->update($validatedData);

        return redirect()->route('admin.index')->with('success', 'Announcement updated successfully.');
    }

    public function deleteAnnouncement(Announcement $announcement)
    {
        $announcement->delete();
        return to_route('admin.index');
    }

    //companies
    public function editCompany(Company $company)
    {
        return inertia('Admin/Companies/Edit', compact('company'));
    }

    public function updateCompany(Company $company, Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'nullable|string',
            'email' => 'nullable|string',
            'phone' => 'nullable|string',
            'website' => 'nullable|string',
            'location' => 'nullable|string',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('logo') && $request->file('logo')->isValid()) {
            if ($company->logo && Storage::disk('public')->exists($company->logo)) {
                Storage::disk('public')->delete($company->logo);
            }
            $validatedData['logo'] = $request->file('logo')->store('logos', 'public');
        }

        $company->update($validatedData);

        return to_route('admin.index')->with('success', 'Company updated successfully.');
    }

    public function deleteCompany(Company $company)
    {
        $company->delete();
        return to_route('admin.index');
    }

    //categories
    public function updateCategory(Request $request, Category $category)
    {
        $validatedData = $request->validate([
            'name' => 'nullable|string',
        ]);

        if (!$validatedData['name']) return;

        $category->update($validatedData);
        return to_route('admin.index');
    }

    public function deleteCategory(Category $category)
    {
        $category->delete();
        return to_route('admin.index');
    }

    //users
    public function indexUsers()
    {
        $users = User::query()->latest()->paginate(10);

        return inertia('Admin/Users/Index', compact('users'));
    }

    public function editUser(User $user)
    {
        return inertia('Admin/Users/Edit', compact('user'));
    }

    public function updateUser(Request $request, User $user)
    {

        $validatedData = $request->validate([
            'name' => 'nullable',
            'email' => 'nullable',
            'status' => 'nullable',
        ]);

        $user->update($validatedData);

        return to_route('admin.users.index');
    }

    public function deleteUser(User $user)
    {
        $user->delete();
        return to_route('admin.users.index');
    }
}
