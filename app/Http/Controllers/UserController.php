<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::Search($request->q)->where('email', "!=", 'admin@gmail.com')->orderBy('id', 'desc')->paginate($request->row);
        return response()->json($users, 200);
    }

    public function allUser()
    {
        $users = User::where('email', "!=", 'admin@gmail.com')->get();
        return response()->json($users, 200);
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
        try {
            $user = new User();
            $request['password'] = Hash::make($request->password);
            if ($request->profile_photo) {
                $position = strpos($request->profile_photo, ";");
                $sub_str = substr($request->profile_photo, 0, $position);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == 'Allowed') {
                    $upload_path = "backend_assets/assets/images/Users/" . time() . ".webp";
                    $resize_image = Image::make($request->profile_photo)->resize(400, 300);
                    $resize_image->save($upload_path);
                    $request['profile_photo_path'] = $upload_path;
                }
            }
            $user->fill($request->all())->save();
            $status = 201;
            $response = [
                'status'  => $status,
                'message' => 'Successfully Added User',
            ];
        } catch (\Exception $e) {
            $status = 400;
            $response = [
                'status'  => $e->getMessage(),
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
    public function show(User $user)
    {
        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return response()->json($user, 200);
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
        try {
            $user = User::find($id);
            if ($request->profile_photo_path && $user->profile_photo_path != $request->profile_photo_path) {
                $position = strpos($request->profile_photo_path, ";");
                $sub_str = substr($request->profile_photo_path, 0, $position);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == 'Allowed') {
                    $upload_path = "backend_assets/assets/images/Users/" . time() . ".webp";
                    $resize_image = Image::make($request->profile_photo_path)->resize(400, 300);
                    $resize_image->save($upload_path);
                    $request['profile_photo_path'] = $upload_path;

                    $file = $user->profile_photo_path;
                    if (File::exists($file)) {
                        File::delete($file);
                    }
                }
            }
            $user->fill($request->all())->save();
        } catch (\Exception $e) {
            $status = 400;
            $response = [
                'status'  => $status,
                "message" => "Bad Request",
            ];
        } finally {
            $status = 201;
            $response = [
                'status'  => $status,
                'message' => 'Successfully Updated User',
            ];
            return response()->json($response, $status);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $file = $user->profile_photo_path;
        if (File::exists($file)) {
            File::delete($file);
        }
        $user->delete();
        $status = 200;
        $response = [
            'status'  => $status,
            'message' => 'Successfully User Deleted',
        ];
        return response()->json($response, $status);
    }

    public function status($id)
    {
        $user = User::findOrFail($id);
        if ($user->status == 1) {
            $user->status = 0;
        } else {
            $user->status = 1;
        }
        $user->save();
        $status = 200;
        $response = [
            'status'  => $status,
            'message' => 'Successfully Status Updated',
        ];
        return response()->json($response, $status);
    }
}
