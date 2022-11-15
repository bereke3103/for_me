<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function index()
    {
        return view('pages.index');
    }
}
