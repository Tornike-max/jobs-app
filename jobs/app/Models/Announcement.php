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
        'category',
        'author_id',
        'company_id',
        'status'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }
}
