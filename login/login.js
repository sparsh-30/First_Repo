function log_val(){
    var mail=document.getElementById('user_mail');
    var password=document.getElementById('user_pass');
    var inp=document.getElementsByClassName('lo_inp');
    var tex_box=document.getElementsByClassName('log_validation');
    for(var i=0;i<2;i++){
        if(inp[i].value=="" || inp[i].value==null){
            tex_box[i].style.display="inline";
            tex_box[i].innerHTML="*Field is required";
            
            
        }
        else{
            tex_box[i].style.display="none";
            if(mail.validity.valid==false){
                tex_box[0].style.display="inline";
                tex_box[0].innerHTML="Enter a valid email";
                
            }
            else{
                tex_box[0].style.display="none";
                var regex=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|edu|in)\b/g;
                var checker=regex.test(mail.value);
                if(checker){
                    tex_box[0].style.display="none";
                }
                else{
                    tex_box[0].style.display="inline";
                tex_box[0].innerHTML="Enter a valid email";
                }
            }
            
        }
    }
    if(tex_box[0].style.display=="none" && tex_box[1].style.display=="none"){
        login_match();
    }
    
    
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
var data=[];
function login_match(){
    readTextFile("https://script.google.com/a/chitkara.edu.in/macros/s/AKfycbxEFfEj1bewP8k2fSWwifzyr6GcnB8tBW_VY_rKqw/exec", function(result){
                    data = JSON.parse(result);
                    valida(data);
                });
    
}

function valida(ar){
    var form_username=document.getElementById("user_mail").value;
    var form_password=document.getElementById("user_pass").value;
    var chec=false;
    for(var i=0;i<ar.length;i++){
        var us_ame=ar[i].Name;
        var user=ar[i].Email;
        var pass=ar[i].Password;
        if(user==form_username && pass==form_password){
            chec=true;
            save_state(us_ame,user,pass);
            window.location.href="../index.html";
            break;
        }
        else{
            chec=false;
            
        }
        
    }
    if(chec==false){
        
        alert("user or password is not match or don't exist");
    }
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementsByTagName("body")[0].innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "D:\TurboFuture\TurboFuture\HomePage.html", true);
    xhttp.send();
  }
function save_state(nam,mail,pas){
    var arr=[nam,mail,pas];
    var st=JSON.stringify(arr);
    localStorage.setItem("det",st);

}