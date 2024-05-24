<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required',
            'informasi' => 'required',
            'gambar' => 'required',
            'gambar.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validate multiple image files
        ]);

        $gambarPaths = [];
        if ($request->hasFile('gambar')) {
            foreach ($request->file('gambar') as $gambar) {
                $path = $gambar->store('gambar', 'public');
                if ($path) {
                    $gambarPaths[] = $path;
                } else {
                    return response()->json(['error' => 'File upload failed'], 500);
                }
            }
        } else {
            return response()->json(['error' => 'No images uploaded'], 400);
        }

        $validated['idAdmin'] = Auth::id();

        $berita = Berita::create([
            'judul' => $validated['judul'],
            'informasi' => $validated['informasi'],
            'gambar' => json_encode($gambarPaths), // Store image paths as JSON
            'idAdmin' => $validated['idAdmin'],
        ]);

        return response()->json(['message' => 'Upload successfully.']);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'judul' => 'required',
            'informasi' => 'required',
            'gambar' => 'nullable',
            'gambar.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $berita = Berita::findOrFail($id);

        if ($berita->idAdmin !== Auth::id() && Auth::user()->role !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $gambarPaths = json_decode($berita->gambar, true);
        if ($request->hasFile('gambar')) {
            if ($gambarPaths) {
                foreach ($gambarPaths as $path) {
                    Storage::disk('public')->delete($path);
                }
            }
            $gambarPaths = [];
            foreach ($request->file('gambar') as $gambar) {
                $path = $gambar->store('gambar', 'public');
                if ($path) {
                    $gambarPaths[] = $path;
                } else {
                    return response()->json(['error' => 'File upload failed'], 500);
                }
            }
        }

        $berita->update([
            'judul' => $validated['judul'],
            'informasi' => $validated['informasi'],
            'gambar' => json_encode($gambarPaths) ?? $berita->gambar,
            'idAdmin' => Auth::id(),
        ]);

        return response()->json(['message' => 'Update successfully.']);
    }

    public function delete($id)
    {  
        $berita = Berita::findOrFail($id);

        if (Auth::user()->role === 'admin') {
            if ($berita->gambar) {
                Storage::disk('public')->delete($berita->gambar);
            }
            $berita->delete();
            return response()->json(['message' => 'Berita berhasil dihapus']);
        } else {
            if ($berita->idAdmin !== Auth::id()) {
                return response()->json(['error' => 'Unauthorized'], 403);
            }
            if ($berita->gambar) {
                Storage::disk('public')->delete($berita->gambar);
            }
            $berita->delete();
            return response()->json(['message' => 'Berita berhasil dihapus']);
        }
    }

    public function show()
    {
        $berita = Berita::all();
        return response()->json($berita);
    }

    public function search($judul)
    {
        $berita = Berita::where('judul', 'like', '%' . $judul . '%')->get(['idBerita', 'judul', 'informasi', 'gambar']);
        return response()->json($berita);
    }

}
