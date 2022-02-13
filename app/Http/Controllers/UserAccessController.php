<?php

namespace App\Http\Controllers;

use App\Models\UserAccess;
use Illuminate\Http\Request;

class UserAccessController extends Controller
{
    public function allUserAccess()
    {
        $user_access = UserAccess::with('users','roles')->wherehas("users",function($data){
         $data->where("email","!=" ,"admin@gmail.com");
        })->get();
        return response()->json($user_access, 200);
    }

    public function updateUserAccess(Request $request)
    {
        UserAccess::updateOrInsert(['user_id'=>$request->user_id],['role_id'=>$request->role_id]);
        $status = 201;
        $response = [
            'status'  => $status,
            'message' => 'Successfully Updated User Access',
        ];
        return response()->json($response,$status);
    }

    public function deleteUserAccess($id)
    {
        UserAccess::find($id)->delete();
        $status = 200;
        $response = [
            'status'  => $status,
            'message' => 'Successfully Deleted User Access',
        ];
        return response()->json($response, $status);
    }
}
