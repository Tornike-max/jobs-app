<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Mail\MyDemoMail;
use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return inertia(
            'Contact/Index',
            [
                'csrf' => csrf_token()
            ]
        );
    }

    public function send(Request $request)
    {
        $mailData = $request->validate([
            'name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'company' => 'nullable|string',
            'phone' => 'nullable',
            'message' => 'required|string|min:4'
        ]);

        Mail::to('ozbetelashvilitoko@gmail.com')->send(new MyDemoMail($mailData));

        return to_route('dashboard');
    }
}
