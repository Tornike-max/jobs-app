<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PricingPlan extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'description',
        'base_duration_days',
        'is_vip',
    ];

    public function options()
    {
        return $this->hasMany(PricingOption::class);
    }
}
