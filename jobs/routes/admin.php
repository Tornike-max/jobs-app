<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;


Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');

//announcements
Route::get('/admin/announcements/{announcement}/edit', [AdminController::class, 'editAnnouncement'])->name('admin.announcement.edit');
Route::put('/admin/announcements/update/{announcement}', [AdminController::class, 'updateAnnouncement'])->name('admin.announcement.update');
Route::delete('/admin/announcements/delete/{announcement}', [AdminController::class, 'deleteAnnouncement'])->name('admin.announcement.delete');


//companies
Route::get('/admin/companies/{company}/edit', [AdminController::class, 'editCompany'])->name('admin.company.edit');
Route::put('/admin/companies/update/{company}', [AdminController::class, 'updateCompany'])->name('admin.company.update');
Route::delete('/admin/companies/delete/{company}', [AdminController::class, 'deleteCompany'])->name('admin.company.delete');


//categories
Route::put('/admin/categories/update/{category}', [AdminController::class, 'updateCategory'])->name('admin.category.update');
Route::delete('/admin/categories/delete/{category}', [AdminController::class, 'deleteCategory'])->name('admin.category.delete');
