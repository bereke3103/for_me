<?php

namespace App\Http\Controllers\Pages\Registration;

use App\Http\Controllers\Controller;

class CreateController extends Controller
{
    public function __invoke()
    {

        return view('pages.registrations.create');
    }
}
