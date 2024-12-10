<?php

namespace Database\Seeders;

use App\Models\Announcement;
use App\Models\Categorie;
use App\Models\Category;
use App\Models\City;
use App\Models\Company;
use App\Models\PricingOption;
use App\Models\PricingPlan;
use App\Models\Region;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory(10)->create();

        // Announcement::factory(25)->create();

        // Company::factory(25)->create();

        // PricingPlan::factory()->create([

        //     'name' => 'ვიპ განცხადება',
        //     'description' => 'მაქსიმალური ხილვადობა ვიპ ველზე 7 დღის განმავლობაში. ',
        //     'is_vip' => true,
        //     'base_duration_days' => '7',
        //     'created_at' => now(),
        //     'updated_at' => now(),

        // ]);

        // PricingOption::factory()->create([
        //     'pricing_plan_id' => 2,
        //     'price' => '50',
        // ]);
    }
}
