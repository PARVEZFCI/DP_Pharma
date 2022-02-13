<?php

namespace App\Http\Controllers;

use App\Models\RolePermission;
use Illuminate\Http\Request;

class RolePermissionController extends Controller
{
    public function updateRolePermission($id, Request $request)
    {
        $data = [];
        RolePermission::where('role_id', $id)->delete();
        foreach ($request->all() as $key => $permission) {
            $data[] = [
                'role_id'       => $id,
                'permission_id' => $permission,
            ];
        }
        RolePermission::insert($data);
        $status = 200;
        $response = [
            'status'  => $status,
            'message' => 'Successfully Permission Updated',
        ];
        return response()->json($response, $status);
    }

    public function getRolePermission($id)
    {
        $permissions = RolePermission::where('role_id', $id)->get();
        $data = [];
        foreach ($permissions as $permission) {
            array_push($data, $permission->permission_id);
        }
        return response()->json($data, 200);
    }
}
