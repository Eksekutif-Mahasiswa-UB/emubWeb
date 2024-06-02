<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function store(Request $request){
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $admin = Admin::create($validated);
        
        return response()->json(['message' => 'Admin created successfully', 'admin' => $admin]);
    }

    public function show()
    {
        $admin = Admin::all();
        return response()->json($admin);
    }

    public function delete($idAdmin)
    {
        $admin = Admin::find($idAdmin);
        if (!$admin) {
            return response()->json(['message' => 'Admin not found.'], 404);
        }

        $admin->delete();
        return response()->json(['message' => 'Admin deleted successfully.']);
    }

    

}