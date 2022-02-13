<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRetailerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                "required",
                Rule::unique('customers', 'name')->ignore($this->customer, 'id'),
            ],
            'password' => 'required|confirmed|min:4',
            'phone' => [
                "required", "numeric", "min:11", "digits:11",
                Rule::unique('customers', 'phone')->ignore($this->customer, 'id'),
            ],
            'address' => 'required',
            'pharmacy_name' => 'required',
            'password_confirmation' => 'required',
        ];
    }
}
