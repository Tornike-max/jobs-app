<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function show(Company $company)
    {
        $companyJobs = Company::query()->with('announcements')->where('id', '=', $company->id)->latest()->first();

        return inertia('Company/Index', [
            'company' => $companyJobs
        ]);
    }
}
