<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\Region;
use Illuminate\Http\Request;

class AnnouncementsController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->all();

        $search = $query['search'] ?? null;
        $type = $query['type'] ?? null;
        $category = $query['category'] ?? null;
        $region = $query['region'] ?? null;

        $anouncements = null;
        if ($search) {
            $anouncements = Announcement::query()->with(['company', 'category', 'region'])->where('title', 'like', "%$search%")
                ->orWhere('category.name', 'like', "%$category%")->latest()->paginate(10);
        }
        if ($type) {
            $anouncements = Announcement::query()->with(['company', 'category', 'region'])->where('title', 'like', "%$search%")
                ->orWhere('category.name', 'like', "%$category%")->latest()->paginate(10);
        } else {
            $anouncements = Announcement::query()->with(['company', 'category', 'region'])->latest()->paginate(10);
        }

        $regions = Region::query()->with('cities')->orderBy('region', 'desc')->get();

        $categories = Category::query()->orderBy('name', 'desc')->get();

        return inertia('Dashboard', compact(['anouncements', 'regions', 'categories']));
    }
}
