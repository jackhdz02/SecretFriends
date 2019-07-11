//universal variables
var count = 3;
var xhttp = new XMLHttpRequest();
//function pairiting couples
function pairiting()
{
    var friends = new Array(12);
    var blockingKey = document.getElementById('txtBlockingPassword').value;
    var count2 = document.getElementById('frmFriends').getAttribute('value');
    if(count2>3)
        {
            friends[count2]=document.getElementById('txtName'+count2).value +','+document.getElementById('txtPhone'+count2).value;
        }
    for(var num=1;num<=count2;num++)
    {
        friends[num]=document.getElementById('txtName'+num).value +','+ document.getElementById('txtPhone'+num).value +','+ Math.floor(Math.random() * (count2 - num + 1) ) + num;
    }
    
}
//function add fields for friends
function addFriend(){
    var frmFriends=document.getElementById('frmFriends');
    count= count+1;
    frmFriends.setAttribute('value',count);
    if (count==12)
        {
            var btnAdd=document.getElementById('btnAdd');
            btnAdd.setAttribute('disabled',true);
            btnAdd.style.backgroundColor='red';
        }
    var divfriends=document.getElementById('friendspart1');
    var divfriends2=document.getElementById('friendspart2');
    var divfriend=document.createElement('div');
    divfriend.setAttribute('id','friend');
    divfriend.setAttribute('value',count);
    var divRowName=document.createElement('div');
    divRowName.setAttribute('class','row');
    var lblName=document.createElement('label');
    lblName.innerHTML="Name";
    var txtName = document.createElement('input');
    txtName.setAttribute('type','text');
    txtName.setAttribute('class','name');
    txtName.setAttribute('placeholder','Name');
    txtName.setAttribute('id','txtName'+count);
    txtName.setAttribute('required',true);
    var divRowPhone=document.createElement('div');
    divRowPhone.setAttribute('class','row');
    var lblPhone = document.createElement('label');
    lblPhone.innerHTML="Phone";
    var txtPhone = document.createElement('input');
    txtPhone.setAttribute('type','text');
    txtPhone.setAttribute('class','phone');
    txtPhone.setAttribute('placeholder','Phone');
    txtPhone.setAttribute('id','txtPhone'+count);
    txtPhone.setAttribute('required',true);
    divRowName.appendChild(lblName);
    divRowName.appendChild(txtName);
    divfriend.appendChild(divRowName);
    divRowPhone.appendChild(lblPhone);
    divRowPhone.appendChild(txtPhone);
    divfriend.appendChild(divRowPhone);
    divfriends.appendChild(divfriend);
    frmFriends.appendChild(divfriends);
    frmFriends.appendChild(divfriends2);
}