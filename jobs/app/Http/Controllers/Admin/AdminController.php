<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
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
        $transactionsCount = 0;

        $announcements = Announcement::query()->with(['author', 'transaction', 'category'])->latest()->take(10)->get();

        $dateData = Announcement::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->groupBy('created_at')
            ->pluck('total', 'date');

        $companies = Company::query()->latest()->paginate(10);

        foreach ($transactions as $transaction) {
            $transactionsCount += $transaction['amount'];
        }

        return inertia('Admin/Index', compact(['announcementsCount', 'latestAnnouncementsCount', 'activeUsers', 'transactionsCount', 'announcements', 'dateData', 'companies']));
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
}
