<?php

namespace Database\Seeders;

use App\Models\Announcement;
use App\Models\Categorie;
use App\Models\Category;
use App\Models\City;
use App\Models\Company;
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

        Announcement::factory(25)->create();

        // Company::factory(25)->create();
    }
}
