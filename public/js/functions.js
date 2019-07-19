//universal variables
var count = 3;
var xhml = new XMLHttpRequest();
var url = 'http://127.0.0.1:8000';
//function pairiting couples
function pairiting(){
    var friends = new Array();
    var blockingKey = document.getElementById('txtBlockingPassword').value;
    var count2 = document.getElementById('frmFriends').getAttribute('value');
    if(count2>3)
    {
        friends[count2]=document.getElementById('txtName'+count2).value +','+ document.getElementById('txtPhone'+count2).value;
    }
   for(var num1=1;num1<=count2;num1++)
    {
        friends[num1]=document.getElementById('txtName'+ num1).value +','+ document.getElementById('txtPhone'+num1).value;
    }
    friends.push=document.getElementById('txtName1').value;
    shuffle(friends); 
    console.log(friends); 
    
    xhml.open('get',url+'/post_list',true);
    xhml.onreadystatechange = function(){
        if(xhml.readyState == 4 && xhml.status == 200){
            document.getElementById("frmFriends").innerHTML = this.responseText;
        }
    }
    xhml.send();
    /*
    $(document).on('ready',function(){
        $("btnPairing").onclick(function(){
            e.preventDefault();
            $.ajax({
                url:'/post_list',
                type:'POST',
                data: $('#frmFriends').serialize(),
                success: function(resp){
                    console.log(resp)
                },
                error: function(jqXHR, status, error){
                    console.log(status);
                }
            });
        });
    });*/
    //friends[num]=document.getElementById('txtName'+num).value +','+ document.getElementById('txtPhone'+num).value +','+ Math.round(((Math.random()-((1/(count2-num+1))/2))/(1/(count2-num+1)))+ num);
}
function shuffle(friends){
    var mess, safe, num2;
    for (num2 = friends.length - 1; num2 > 0; num2--) {
        mess = Math.floor(Math.random() * (num2 + 1));
        safe = friends[num2];
        friends[num2] = friends[mess];
        friends[mess] = safe;
    }
    return friends;
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