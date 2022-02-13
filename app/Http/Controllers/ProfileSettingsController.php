<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Actions\Fortify\PasswordValidationRules;

class ProfileSettingsController extends Controller
{
    use PasswordValidationRules;

    public function index()
    {
        return response()->json(User::findOrFail(Auth::user()->id), 200);
    }

    public function updateProfile(Request $request)
    {
        try {
            $user = User::findOrFail(Auth::user()->id);
            if ($request->profile_photo_path && $user->profile_photo_path != $request->profile_photo_path) {
                if (File::exists($user->profile_photo_path)) {
                    File::delete($user->profile_photo_path);
                }
                $position = strpos($request->profile_photo_path, ";");
                $sub_str = substr($request->profile_photo_path, 0, $position);
                $extension = explode("/", $sub_str);
                $result = Helper::imageExtension($extension[1]);
                if ($result == 'Allowed') {
                    $upload_path = "backend_assets/assets/images/profile_" . time() . ".webp";
                    $resize_image = Image::make($request->profile_photo_path);
                    $resize_image->save($upload_path);
                    $request['profile_photo_path'] = $upload_path;
                }
            }
            $user->fill($request->all())->save();
            $status = 201;
            $response = [
                'status'  => $status,
                "message" => "Successfully Updated User",
            ];
        } catch (\Exception $e) {
            $status = 400;
            $response = [
                'status'  => $status,
                "message" => "Bad Request",
            ];
        }
        return response()->json($response, $status);
    }

    public function changePassword(Request $request)
    {
        $input = $request->all();
        $user = User::findOrFail(Auth::user()->id);
        Validator::make($input, [
            'current_password' => ['required', 'string'],
            'password' => $this->passwordRules(),
        ])->after(function ($validator) use ($user, $input) {
            if (!Hash::check($input['current_password'], $user->password)) {
                $validator->errors()
                    ->add('current_password', __('The provided password does not match your current password.'));
            }
        })->validateWithBag('updatePassword');

        $user->forceFill([
            'password' => Hash::make($input['password']),
        ])->save();

        $response = [
            'status'  => 200,
            'message' => 'Password Changed',
        ];
        return response()->json($response, 200);
    }
}
