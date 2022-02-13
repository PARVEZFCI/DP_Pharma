<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMedicineRequest extends FormRequest
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
        $medicine = $this->route('medicine');
        return [
            'name'        => 'required',
            'category_id' => 'required',
            'generic_id'  => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name'        => 'Medicine name field is required',
            'category_id' => 'Category field is required',
            'generic_id'  => 'Generic field is required',
        ];
    }
}
