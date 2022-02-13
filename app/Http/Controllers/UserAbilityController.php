<?php

namespace App\Http\Controllers;

use App\Models\RolePermission;
use App\Models\UserAccess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAbilityController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        if (Auth::check()) {
            $role = UserAccess::whereUserId(Auth::id())->first();
            $data['permissions'] = RolePermission::with('permissions')
                ->whereRoleId($role->role_id)->get()
                ->pluck('permissions.name')->toArray();
            $data['loggedIn'] = true;
        } else {
            $data['loggedIn'] = false;
        }
        return response()->json($data, 200);
    }
}
