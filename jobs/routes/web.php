<?php

use App\Http\Controllers\About\AboutController;
use App\Http\Controllers\Announcements\AnnouncementsController;
use App\Http\Controllers\Banner\BannerController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\Faq\FaqController;
use App\Http\Controllers\Price\PriceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Services\ServicesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [AnnouncementsController::class, 'index'])->name('dashboard');
Route::get('/announcements/show/{announcement}', [AnnouncementsController::class, 'show'])->name('announcements.show');
Route::get('/announcements/create', [AnnouncementsController::class, 'create'])->name('announcements.create');
Route::post('/announcements/store', [AnnouncementsController::class, 'store'])->name('announcements.store');
Route::get('/payment/success', [AnnouncementsController::class, 'success'])->name('payment.success');
Route::get('/payment/cancel', [AnnouncementsController::class, 'cancel'])->name('payment.cancel');
//company
Route::get('/company/jobs/{company}', [CompanyController::class, 'show'])->name('currentCompany.show');

//pricing
Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
Route::get('/publish', [ServicesController::class, 'publish'])->name('services.publish');
Route::get('/why-us', [ServicesController::class, 'whyUs'])->name('services.whyUs');

Route::get('/faq', [FaqController::class, 'index'])->name('faqs.index');
Route::get('/about', [AboutController::class, 'index'])->name('about.index');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
