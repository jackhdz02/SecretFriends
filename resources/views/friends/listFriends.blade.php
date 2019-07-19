@extends('layouts.app')
@section('content')
<link href="../css/styles.css" rel="stylesheet">
<script type="text/javascript" src="../js/functions.js"></script>
<div class="container" id="container">
    <div class="row">
            <div class="col">
                <a class="btn btn-secondary" href="/">Back</a>
            </div>
        </div>
    <div class="row">
        <div class="col"></div>
        <div class="col-6">
            <h2>Secrets Friends</h2>
            <hr>
        </div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col">
            <h3>Lists Friends</h3>
        </div>
    </div>
    <div class="row">
        <table class="table">
            <tr class="tr">
                <td class="td">ID_List</td>
                <td class="td">Visibility</td>
            </tr>
        </table>
    </div>
</div>
<div class="footer">2018 - 2019 ®</div>
@endsection