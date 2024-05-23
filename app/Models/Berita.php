<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Berita extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'berita';
    protected $primaryKey = 'idBerita';
    protected $fillable =[
        'judul',
        'informasi',
        'gambar',
        'idAdmin'
    ];

}
