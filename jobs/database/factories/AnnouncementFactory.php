<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Company;
use App\Models\Region;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class AnnouncementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->jobTitle(),
            'description' => fake()->text(),
            'region_id' => fake()->numberBetween(24, 35),
            'salary' => fake()->randomElement(['5000₾', '1000₾', '1300₾', '2200₾', '750₾', '2300₾', '1900₾']),
            'employment_type' => fake()->randomElement(['full-time', 'part-time', 'hybrid']),
            'author_id' => User::factory(),
            'company_id' => Company::factory(),
            'category_id' => fake()->numberBetween(1, 17),
            'vacancy_type' => 'vacancy',
            'end_date' => fake()->dateTime()->format('Y-m-d H:i:s'),
            'status' => fake()->randomElement(['active', 'closed']),
        ];
    }
}
