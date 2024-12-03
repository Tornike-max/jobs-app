<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Announcement extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'title',
        'description',
        'location',
        'salary',
        'employment_type',
        'author_id',
        'status'
    ];

    public function categories()
    {
        return $this->belongsToMany(Categorie::class, 'announcement_category');
    }
}
