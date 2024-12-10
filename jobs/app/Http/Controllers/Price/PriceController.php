<?php

namespace App\Http\Controllers\Price;

use App\Http\Controllers\Controller;
use App\Models\PricingPlan;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function index()
    {
        $pricing = PricingPlan::query()->with('options')->latest()->get();

        dd($pricing);
    }
}
