<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\City;
use App\Models\Region;
use Illuminate\Http\Request;

class AnnouncementsController extends Controller
{
    public function index()
    {
        $anouncements = Announcement::query()->with(['company', 'category', 'region'])->latest()->paginate(10);

        $regions = Region::query()->with('cities')->orderBy('region', 'desc')->get();

        return inertia('Dashboard', compact(['anouncements', 'regions']));
    }
}
