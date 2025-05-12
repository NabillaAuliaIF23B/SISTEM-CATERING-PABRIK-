<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Karyawan extends Authenticatable
{
    protected $table = 'karyawan';
    protected $primaryKey = 'id_karyawan';

    protected $fillable = [
        'username', 'email', 'nama', 'password', 'role', 'tanggal_masuk', 'foto'
    ];

    protected $hidden = [
        'password'
    ];
}