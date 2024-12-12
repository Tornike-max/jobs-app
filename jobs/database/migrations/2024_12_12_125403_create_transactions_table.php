<?php

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->nullable();
            $table->foreignIdFor(Announcement::class)->nullable();
            $table->string('transaction_id')->unique();
            $table->enum('status', ['pending', 'completed', 'failed']);
            $table->decimal('amount', 10, 2);
            $table->string('payment_method')->nullable();
            $table->string('currency')->default('GEL');
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
