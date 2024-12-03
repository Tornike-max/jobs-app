<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CategorieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'slug' =>  Str::slug(fake()->randomElement(['Software Engineer', 'Frontend Developer', 'Backend Developer', 'React Developer', 'Laravel Developer', 'Next js Developer', 'Data Scientist', 'Card Counter']))
        ];
    }
}
