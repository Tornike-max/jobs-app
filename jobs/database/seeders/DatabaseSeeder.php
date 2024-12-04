<?php

namespace Database\Seeders;

use App\Models\Announcement;
use App\Models\Categorie;
use App\Models\Company;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory(10)->create();

        Announcement::factory(50)->create();

        Categorie::factory(15)->create();

        Company::factory()->create();
    }
}
