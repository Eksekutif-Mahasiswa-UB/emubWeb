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
            'gambar.*' => 'image|mimes:jpeg,png,jpg,gif|', // Validate multiple image files
        ]);

        $gambarPaths = [];
        if ($request->hasFile('gambar')) {
            foreach ($request->file('gambar') as $gambar) {
                $path = $gambar->store('public/gambar');
                if ($path) {
                    $gambarPaths[] = env('APP_URL') . '/emubWeb/storage/app/public/' . str_replace('public/', '', $path);
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
            'gambar' => json_encode($gambarPaths, JSON_UNESCAPED_SLASHES), // Store image URLs as JSON without escaped slashes
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
            'gambar.*' => 'image|mimes:jpeg,png,jpg,gif|',
        ]);

        $berita = Berita::findOrFail($id);

        if ($berita->idAdmin !== Auth::id() && Auth::user()->role !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $gambarPaths = json_decode($berita->gambar, true);
        if ($request->hasFile('gambar')) {
            if ($gambarPaths) {
                foreach ($gambarPaths as $path) {
                    Storage::disk('public')->delete(str_replace(env('APP_URL') . '/emubWeb/storage/app/public/', '', $path));
                }
            }
            $gambarPaths = [];
            foreach ($request->file('gambar') as $gambar) {
                $path = $gambar->store('public/gambar');
                if ($path) {
                    $gambarPaths[] = env('APP_URL') . '/emubWeb/storage/app/public/' . str_replace('public/', '', $path);
                } else {
                    return response()->json(['error' => 'File upload failed'], 500);
                }
            }
        }

        $berita->update([
            'judul' => $validated['judul'],
            'informasi' => $validated['informasi'],
            'gambar' => json_encode($gambarPaths, JSON_UNESCAPED_SLASHES) ?? $berita->gambar,
            'idAdmin' => Auth::id(),
        ]);

        return response()->json(['message' => 'Update successfully.']);
    }

    public function delete($id)
    {
        $berita = Berita::findOrFail($id);

        if (Auth::user()->role === 'admin') {
            if ($berita->gambar) {
                $gambarPaths = json_decode($berita->gambar, true);
                foreach ($gambarPaths as $path) {
                    Storage::disk('public')->delete(str_replace(env('APP_URL') . '/emubWeb/storage/app/public/', '', $path));
                }
            }
            $berita->delete();
            return response()->json(['message' => 'Berita berhasil dihapus']);
        } else {
            if ($berita->idAdmin !== Auth::id()) {
                return response()->json(['error' => 'Unauthorized'], 403);
            }
            if ($berita->gambar) {
                $gambarPaths = json_decode($berita->gambar, true);
                foreach ($gambarPaths as $path) {
                    Storage::disk('public')->delete(str_replace(env('APP_URL') . '/emubWeb/storage/app/public/', '', $path));
                }
            }
            $berita->delete();
            return response()->json(['message' => 'Berita berhasil dihapus']);
        }
    }

    public function show()
    {
        $berita = Berita::all()->map(function ($item) {
            $item->gambar = json_decode($item->gambar);
            return $item;
        });
        return response()->json($berita);
    }

    public function search($judul)
    {
        $berita = Berita::where('judul', 'like', '%' . $judul . '%')->get(['idBerita', 'judul', 'informasi', 'gambar']);
        $berita = $berita->map(function ($item) {
            $item->gambar = json_decode($item->gambar);
            return $item;
        });
        return response()->json($berita);
    }
}