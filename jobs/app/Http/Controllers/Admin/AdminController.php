<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $announcementsCount = Announcement::query()->get()->count();
        $latestAnnouncementsCount = Announcement::query()->latest()->take(5)->get()->count();
        $activeUsers = User::query()->get()->count();
        $transactions = Transaction::query()->latest()->get();
        $transactionsCount = 0;
        foreach ($transactions as $transaction) {
            $transactionsCount += $transaction['amount'];
        }

        return inertia('Admin/Index', compact(['announcementsCount', 'latestAnnouncementsCount', 'activeUsers', 'transactionsCount']));
    }
}
