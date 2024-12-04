<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementsController extends Controller
{
    public function index()
    {
        $anouncements = Announcement::query()->with(['categories', 'company'])->latest()->paginate(10);

        return inertia('Dashboard', compact('anouncements'));
    }
}
