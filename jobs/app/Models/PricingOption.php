<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PricingOption extends Model
{
    use HasFactory, Notifiable;

    public function plan()
    {
        return $this->belongsTo(PricingPlan::class);
    }
}
