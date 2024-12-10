<?php

namespace App\Http\Controllers\Faq;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::query()->latest()->get();
        return inertia('Faqs/Index', [
            'faqs' => $faqs
        ]);
    }
}
