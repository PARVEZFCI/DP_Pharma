<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
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
        $category = $this->route('category');
        return [
            'category_name' => 'required',
            'code'          => 'required|unique:categories,code,' . $category . ',id',
        ];
    }

    public function messages() 
    {
        return [
            'category_name' => 'Category name field is required',
            'code'          => 'Code field is required',
        ];
    }
}
