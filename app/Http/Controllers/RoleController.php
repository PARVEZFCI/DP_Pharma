<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = Role::Search($request->q)->where("name", "!=","Super Admin")->orderBy('id', 'desc')->paginate($request->row);
        return response()->json($roles, 200);
    }

    public function allRole()
    {
        $roles = Role::Status()->get();
        return response()->json($roles, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = new Role;
        $save = $role->fill($request->all())->save();
        if ($save) {
            $status = 201;
            $response = [
                'status'  => $status,
                'message' => 'Successfully Added Role',
            ];
        } else {
            $status = 400;
            $response = [
                'status'  => $status,
                "message" => "Bad Request",
            ];
        }
        return response()->json($response, $status);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        return response()->json($role, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $save = $role->fill($request->all())->save();
        if ($save) {
            $status = 201;
            $response = [
                'status'  => $status,
                'message' => 'Successfully Updated Role',
            ];
        } else {
            $status = 400;
            $response = [
                'status'  => $status,
                "message" => "Bad Request",
            ];
        }
        return response()->json($response, $status);
    }

    public function status($id)
    {
        $role = Role::findOrFail($id);
        if ($role->status == 1) {
            $role->status = 0;
        } else {
            $role->status = 1;
        }
        $role->save();
        $status = 200;
        $response = [
            'status'  => $status,
            'message' => 'Successfully Status Updated',
        ];
        return response()->json($response, $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::findOrFail($id);
        $role->delete();
        $status = 200;
        $response = [
            'status'  => $status,
            'message' => 'Successfully Role Deleted',
        ];
        return response()->json($response, $status);
    }
}
