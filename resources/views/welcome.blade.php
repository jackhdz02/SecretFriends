@extends('layouts.app')
@section('content')
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="../css/styles.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <h1>Welcome</h1>
            <a href="/create/listFriends" id="createlist">Start the game</a>
        </div>
    </body>
</html>
@endsection