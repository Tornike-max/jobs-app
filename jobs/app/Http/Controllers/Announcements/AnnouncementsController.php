<?php

namespace App\Http\Controllers\Announcements;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnnouncementsController extends Controller
{
    public function index()
    {
        return inertia('Dashboard');
    }
}
