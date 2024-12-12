<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Company extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'name',
        'phone',
        'website',
        'location',
        'description',
        'logo',
        'user_id'
    ];

    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
