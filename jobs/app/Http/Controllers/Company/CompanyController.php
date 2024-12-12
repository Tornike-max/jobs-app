<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function show(Company $company)
    {
        $companyJobs = Company::query()->with('announcements')->where('id', '=', $company->id)->latest()->first();

        return inertia('Company/Index', [
            'company' => $companyJobs
        ]);
    }

    public function create()
    {
        return inertia('Company/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'website' => 'required|string',
            'location' => 'required|string',
            'description' => 'required',
        ]);


        $validatedData['user_id'] = Auth::user()->id;

        Company::create($validatedData);

        return to_route('dashboard');
    }
}
