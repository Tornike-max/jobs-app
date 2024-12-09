<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Category;
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
}
