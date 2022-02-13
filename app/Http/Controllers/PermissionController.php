<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $permissions = Permission::all();
        $module = [];
        $feature = [];
        $control = [];
        foreach ($permissions as $key => $permission) {
            if ($permission->details == "MODULE") {
                $module[] = [
                    'id'           => $permission->id,
                    'name'         => $permission->name,
                    'display_name' => $permission->display_name,
                ];
            } elseif ($permission->details == "FEATURE") {
                $feature[] = [
                    'id'           => $permission->id,
                    'name'         => $permission->name,
                    'display_name' => $permission->display_name,
                ];
            } else {
                $control[] = [
                    'id'           => $permission->id,
                    'name'         => $permission->name,
                    'display_name' => $permission->display_name,
                ];
            }
        }
        $data['module'] = $module;
        $data['feature'] = $feature;
        $data['control'] = $control;

        return response()->json($data, 200);
    }
}
