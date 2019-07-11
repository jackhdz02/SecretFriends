var cont = 3;
function pairiting()
{
    var friends = new Array(12);
    for(var num=1; num<=friends.length;num++)
    {
        friends[num]=document.getElementById('txtName1').value +','+ document.getElementById('txtPhone1').value;
    }
}
function addFriend(){
    var frmFriends=document.getElementById('frmFriends');
    frmFriends.setAttribute('value',cont);
    cont= cont+1;
    if (cont==12)
        {
            var btnAdd=document.getElementById('btnAdd');
            btnAdd.setAttribute('disabled',true);
            btnAdd.style.backgroundColor='red';
        }
    var divfriends=document.getElementById('friendspart1');
    var divfriends2=document.getElementById('friendspart2');
    var divfriend=document.createElement('div');
    divfriend.setAttribute('id','friend');
    divfriend.setAttribute('value',cont);
    var divRowName=document.createElement('div');
    divRowName.setAttribute('class','row');
    var lblName=document.createElement('label');
    lblName.innerHTML="Name";
    var txtName = document.createElement('input');
    txtName.setAttribute('type','text');
    txtName.setAttribute('class','name');
    txtName.setAttribute('placeholder','Name');
    txtName.setAttribute('id','txtName'+cont);
    var divRowPhone=document.createElement('div');
    divRowPhone.setAttribute('class','row');
    var lblPhone = document.createElement('label');
    lblPhone.innerHTML="Phone";
    var txtPhone = document.createElement('input');
    txtPhone.setAttribute('type','text');
    txtPhone.setAttribute('class','phone');
    txtPhone.setAttribute('placeholder','Phone');
    txtPhone.setAttribute('id','txtPhone'+cont);
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