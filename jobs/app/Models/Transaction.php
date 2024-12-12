<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Transaction extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'user_id',
        'announcement_id',
        'transaction_id',
        'status',
        'amount',
        'payment_method',
        'currency',
        'paid_at',
        'identical_code',
        'phone'
    ];
}
