<?php

namespace App\Helpers;

class Helper
{
    public static function imageExtension($ext)
    {
        $allowed_extension = ['jpg', 'jpeg', 'png'];
        if (!in_array($ext, $allowed_extension)) {
            return 'Allowed Extension Only' . implode(',', $allowed_extension);
        }

        return  true;
    }
}
