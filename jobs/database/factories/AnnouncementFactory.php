<?php

namespace Database\Factories;

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
            'location' => fake()->city(),
            'salary' => fake()->randomElement(['5000₾', '1000₾', '1300₾', '2200₾', '750₾', '2300₾', '1900₾']),
            'employment_type' => fake()->randomElement(['full-time', 'part-time', 'hybrid']),
            'author_id' => User::factory(),
            'status' => fake()->randomElement(['active', 'closed']),
        ];
    }
}
