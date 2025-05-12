<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class KaryawanSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('karyawan')->insert([
            [
                'username' => 'carli',
                'email' => 'carli@gmail.com',
                'nama' => 'Carli Fahrudin',
                'password' => Hash::make('carli23'),
                'role' => 'karyawan',
                'tanggal_masuk' => '2023-01-01',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'username' => 'geari',
                'email' => 'geari@gmail.com',
                'nama' => 'Mochammad Geari Ferdiansyah',
                'password' => Hash::make('geari34'),
                'role' => 'koki',
                'tanggal_masuk' => '2022-11-10',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'username' => 'mugi',
                'email' => 'mugi@gamil.com',
                'nama' => 'Mugi Rahayu',
                'password' => Hash::make('mugi78'),
                'role' => 'hrga',
                'tanggal_masuk' => '2021-09-20',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
