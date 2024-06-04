<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       Admin::create([
        "username"=> "ptpdgg",
        "role"=> "admin",
        "password"=> bcrypt("12345678"),
       ]);

    //    $table->string('username');
    //    $table->string('password');
    //    $table->enum('role',['admin','alumni','tautan','proker','berita']);
       
    }
}
