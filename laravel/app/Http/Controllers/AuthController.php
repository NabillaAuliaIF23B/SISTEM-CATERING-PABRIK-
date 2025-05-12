<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Karyawan;
use Illuminate\Support\Facades\Hash;


use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $karyawan = Karyawan::where('username', $request->username)->first();

        if (!$karyawan || !Hash::check($request->password, $karyawan->password)) {
            return response()->json(['message' => 'Login gagal'], 401);
        }

        return response()->json([
            'message' => 'Login berhasil',
            'user' => $karyawan
        ]);
    }

    public function logout(Request $request)
    {
        // Hapus semua token pengguna
        Auth::user()->tokens->each(function ($token) {
            $token->delete();
        });

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function uploadFoto(Request $request)
    {
        $request->validate([
            'id_karyawan' => 'required|exists:karyawan,id_karyawan',
            'foto' => 'required|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        $karyawan = Karyawan::find($request->id_karyawan);

        $filename = uniqid() . '.' . $request->foto->extension();
        $request->foto->storeAs('public/foto', $filename);

        $karyawan->foto = $filename;
        $karyawan->save();

        return response()->json(['message' => 'Foto berhasil diupload', 'foto_url' => asset('storage/foto/' . $filename)]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:karyawan',
            'email' => 'required|email|unique:karyawan',
            'nama' => 'required',
            'password' => 'required|min:6',
            'role' => 'required|in:karyawan,koki,hrga',
            'tanggal_masuk' => 'required|date',
            'foto' => 'nullable|image|max:2048'
        ]);

        $fotoPath = $request->file('foto') 
            ? $request->file('foto')->store('foto-karyawan', 'public') 
            : null;

        $karyawan = Karyawan::create([
            'username' => $request->username,
            'email' => $request->email,
            'nama' => $request->nama,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'tanggal_masuk' => $request->tanggal_masuk,
            'foto' => $fotoPath
        ]);

        return response()->json([
            'message' => 'Karyawan berhasil ditambahkan',
            'data' => $karyawan
        ], 201);
    }
}
