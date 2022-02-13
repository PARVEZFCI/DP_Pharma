<?php 

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponse
{
	protected function successResponse($data, $message = null, $code = Response::HTTP_OK)
	{
		return response()->json([
			'status'    => 'Success',
			'data'      => $data,
			'message'   => $message,
			'code'      => $code,
		], $code);
	}

	protected function errorResponse($message = null, $code = Response::HTTP_BAD_REQUEST)
	{
		return response()->json([
			'status'    => 'Error',
			'data'      => null,
			'message'   => $message,
			'code'      => $code,
		], $code);
	}
} 