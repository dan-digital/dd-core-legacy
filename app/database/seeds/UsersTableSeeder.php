<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		User::create([
			'username' => 'Dan',
			'password' => Hash::make('123123')
		]);

		foreach(range(1, 10) as $index)
		{
			User::create([
				'username' => $faker->unique()->userName,
				'password' => Hash::make('123123')
			]);
		}
	}

}