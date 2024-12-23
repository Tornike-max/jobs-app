<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PricingOption extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'price',
        'max_vacancies',
        'pricing_plan_id',
    ];

    public function plan()
    {
        return $this->belongsTo(PricingPlan::class, 'pricing_plan_id');
    }
}
