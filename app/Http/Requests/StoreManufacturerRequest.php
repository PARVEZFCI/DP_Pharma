<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreManufacturerRequest extends FormRequest
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
        $manufacturer = $this->route('manufacturer');
        return [
            'manufacture_name' => 'required|unique:manufactures,manufacture_name,' . $manufacturer . ',id',
            'mobile'            => 'required'
        ];
    }
}
