<?php


namespace App\Http\Controllers;


class IndexController extends Controller
{
    public function index()
    {
        return view('web.index', [
            'dateText'=>123
        ]);
    }
}
