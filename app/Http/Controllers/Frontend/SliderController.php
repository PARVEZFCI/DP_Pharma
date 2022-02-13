<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Slider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SliderController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $sliders = Slider::orderBy('order', 'ASC')->where('status', 1)->get();
        return response()->json($sliders, 200);
    }
}
