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
            <div class="row">
                <div class="col-md-6">
                    <h3>Add your friends: </h3>
                </div>
                <div class="col-md-6">
                    <button type="submit" id="btnAdd" onclick="addFriend();">
                        <img src="../images/add.png">
                    </button>
                </div>
            </div>
        </div>
    </div>
    <form id="frmFriends" value="3" method="POST" >
        {{ csrf_field() }}
        <div id="friendspart1">
            <div class="row">
                <h4>Friends</h4>
                
            </div>
            <div id="friend" value="1">
                <div class="row">
                    <label>Name :</label>
                    <input type="text" class="name" placeholder="Name" id="txtName1" name="name1">
                </div>
                <div class="row">
                    <label>Phone :</label>
                    <input type="text" class="phone"   placeholder="Phone" id="txtPhone1" name="phone1">
                </div>
            </div>
            <div id="friend" value="2">
                <div class="row">
                    <label>Name :</label>
                    <input type="text" class="name" placeholder="Name" id="txtName2" name="name2">
                </div>
                <div class="row">
                    <label>Phone :</label>
                    <input type="text" class="phone" placeholder="Phone" id="txtPhone2" name="name2">
                </div>
            </div>
            <div id="friend" value="3">
                <div class="row">
                    <label>Name :</label>
                    <input type="text" class="name" placeholder="Name" id="txtName3" name="name3">
                </div>
                <div class="row">
                    <label>Phone :</label>
                    <input type="text" class="phone" placeholder="Phone" id="txtPhone3" name="phone3">
                </div>
            </div>
        </div>
        <div id="friendspart2">
            <div class="row">
                <label class="lblblockingKey">Enter the blocking key: </label>
                <input type="password" class="blockingKey" placeholder="*******" id="txtBlockingPassword">
            </div>
            <input type="button" id="btnPairing" value="Pairing" onclick="pairiting();">   
        </div>
    </form>
</div>
<div class="footer">2018 - 2019 ®</div>
@endsection