<?php


namespace App\Http\Controllers;


class DownloadController extends Controller
{
    public function index()
    {
        return view('web.download', [
            'dateText'=>123
        ]);
    }
}
