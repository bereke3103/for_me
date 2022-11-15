<?php

namespace App\Http\Requests\Pages\Registration;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'name'=>'required|string',
            'birthday'=>'required|string',
            'years'=>'required|string',
            'city'=>'required|string',
            'education'=>'required|string',
            'stack'=>'required|string',
            'experience'=>'required|string',
            'contact'=>'required|string',

//            email and password

            'email'=>'required|string',
            'password'=>'required|string',
        ];
    }
}
