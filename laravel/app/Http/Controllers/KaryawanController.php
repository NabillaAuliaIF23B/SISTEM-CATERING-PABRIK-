<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Karyawan;
use Illuminate\Support\Facades\Hash;

class KaryawanController extends Controller
{
    

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:karyawan',
            'email' => 'required|email|unique:karyawan',
            'nama' => 'required',
            'password' => 'required',
            'role' => 'required',
            'foto' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->store('fotos', 'public');
        }

        $karyawan = Karyawan::create([
            'username' => $request->username,
            'email' => $request->email,
            'nama' => $request->nama,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'tanggal_masuk' => now(),
            'foto' => $fotoPath
        ]);

        return response()->json(['message' => 'Karyawan berhasil ditambahkan', 'data' => $karyawan], 201);
    }


    
}
