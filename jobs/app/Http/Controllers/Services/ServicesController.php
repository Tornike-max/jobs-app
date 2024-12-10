<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\PricingPlan;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index()
    {
        $pricing = PricingPlan::query()->with('options')->latest()->get();

        return inertia('Services/Index', compact('pricing'));
    }
}
