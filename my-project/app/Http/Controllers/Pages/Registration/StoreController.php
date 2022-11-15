<?php

namespace App\Http\Controllers\Pages\Registration;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pages\Registration\StoreRequest;
use App\Models\Registration;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        dd($data);
//        Registration::Create($data);
        return redirect()->route('pages.registrations.index');
    }
}
