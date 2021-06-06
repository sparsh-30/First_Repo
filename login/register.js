function clea(){
    var inpu=document.getElementsByClassName("inp_reg");
    var inpulo=document.getElementsByClassName("lo_inp");
    for(var i=0;i<4;i++){
        inpu[i].value="";
        
    }
    for(var j=0;j<2;j++){
        inpulo[j].value="";
    }
    
}
function clea_timeout(){
    setTimeout(() =>{
        var inpu=document.getElementsByClassName("inp_reg");
        var inpulo=document.getElementsByClassName("lo_inp");
        for(var i=0;i<4;i++){
            inpu[i].value="";
            
        }
        for(var j=0;j<2;j++){
            inpulo[j].value="";
        }
    },500);
    
}
function vali(){
    var Name=document.getElementById('user_info');
    var mail=document.getElementById('user_reg');
    var password=document.getElementById('pass_reg');
    var verify_password=document.getElementById('verify_pass_reg');
    var inpu=document.getElementsByClassName("inp_reg");
    var displ_p=document.getElementsByClassName("info_validation");
    var chec=false;
    for(var i=0;i<4;i++){
        if(inpu[i].value=="" || inpu[i].value==null ){
            displ_p[i].style.display="inline";
            displ_p[i].innerHTML="*Required,Please fill the field";
            

            
        }
        else{
            displ_p[i].style.display="none";
            if(mail.validity.valid==false){
                displ_p[1].style.display="inline";
                displ_p[1].innerHTML="please fill a valid email address";    
            }
            if(inpu[0]!="" || inpu[0]!=null || inpu[1]!="" || inpu[1]!=null ){
                if(password.value.length>=6){
                    displ_p[2].style.display="none";
                    password_match();
                    

                }
                else{
                    displ_p[2].style.display="inline";
                    displ_p[2].innerHTML="Password should be more than 6 letters";
                    
                }
            }
            
        }
        
    }
    var lak=true;
    var span_tg=document.getElementById('password_level');
    for(var j=0;j<4;j++){
        if(displ_p[j].style.display=="none"){
            if(span_tg.innerHTML=="Weak" || span_tg.innerHTML=="none"){
                chec=false;
                lak=false;
                break;
                
            }
            else{
                chec=true;
                lak=true;
            }
        }
        else{
            chec=false;
            break;
        }
    }
    
    if(lak==false){
        alert("enter a better password");
    }
    else{
        if(chec==true){
            reg_check();
            span_tg.innerHTML="";
        }
    }
    

}
function password_match(){
    var password=document.getElementById('pass_reg');
    var verify_password=document.getElementById('verify_pass_reg');
    var displ_p=document.getElementsByClassName("info_validation");
    if(password.value==verify_password.value){
        displ_p[2].style.display="none";
        displ_p[3].style.display="none";
    }
    else{
        displ_p[2].style.display="inline";
        displ_p[2].innerHTML="Password dosen't match";
        displ_p[3].style.display="inline";
        displ_p[3].innerHTML="Password dosen't match";
    }
}

function con(reg){
    if(reg==true){
        alert("email already exist");
        
    }
    else{
        const scriptURL = 'https://script.google.com/a/chitkara.edu.in/macros/s/AKfycbxEFfEj1bewP8k2fSWwifzyr6GcnB8tBW_VY_rKqw/exec'
            const form = document.forms['register_post']
          
            
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("thank you for registering"))
                .catch(error => console.error('Error!', error.message))
                clea_timeout();
                count=1;
                anima_reg();
            
        
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
var reg_data=[];
function reg_check(){
    
    
    readTextFile("https://script.google.com/a/chitkara.edu.in/macros/s/AKfycbxEFfEj1bewP8k2fSWwifzyr6GcnB8tBW_VY_rKqw/exec", function(result){
                    reg_data = JSON.parse(result);
                    var rd=va(reg_data);
                    con(rd);
                    
                });
    
}
function va(re){
    var user_name=document.getElementById("user_reg").value;
    for(var i=0;i<re.length;i++){
        var user_mail=re[i].Email;
        if(user_name==user_mail){
            bo=true;
            break;
        }
        else{
            bo=false;
        }
    }
    return bo;
}


function password_cap(){
    var password=document.getElementById('pass_reg');
    var appe=document.getElementById('password_level');
    var wek=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g;
    var stron=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    var med=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/g;
    var sec_med=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/g;
    var thir_med=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{15,}$/g;
    var four_med=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{25,}$/g;
    var sec_stron=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    var thir_stron=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/g;
    var four_stron=/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{12,}$/g;
    if(password.value==""){
            appe.style.display="none";
    }
    else{
        if(stron.test(password.value) || sec_stron.test(password.value) || thir_stron.test(password.value) || four_stron.test(password.value)){
            appe.style.display="inline";
            appe.innerHTML="Strong";
            appe.style.color="green";
            
            
        }
        else if(med.test(password.value) || sec_med.test(password.value) || thir_med.test(password.value) || four_med.test(password.value)){
            appe.style.display="inline";
            appe.innerHTML="Medium";
            appe.style.color="orange";
            
        }
        else if(wek.test(password.value)){
            appe.style.display="inline";
            appe.innerHTML="Weak";
            appe.style.color="red";
            
        }
        else{
            appe.style.display="inline";
            appe.innerHTML="Weak";
            appe.style.color="red";
        }
    }
    
}
var count=0;
function anima_reg(){
    var x=document.getElementById('login_head_chage');
        var z=document.getElementById('login_change');
        var a=document.getElementById('sign_in');
    if(count%2==0){
        document.getElementsByClassName("changer")[0].style.left="0vw";
        document.getElementsByClassName("changer")[0].style.transition = "left 1s";
        document.getElementsByClassName("god_cross")[0].style.color="white";
        
        setTimeout(() =>{document.getElementsByClassName("changer")[0].style.width="35vw";
            document.getElementById('login_head_chage').innerHTML="One Of Us?";
        document.getElementById('login_change').innerHTML="If you already have an account, just sign in. We've missed you!";
        document.getElementById('sign_in').innerHTML="Sign in";
        document.getElementById('login_div').style.display="none";
        document.getElementById("reg_div").style.display="block";
        z.style.right="80px";
        // a.style.top="460px";
        a.style.left="5vw";
        // x.style.left="140px";
        },500);
        count++;
        
    }
    else{
        
        document.getElementsByClassName("changer")[0].style.left="64vw";
        document.getElementsByClassName("changer")[0].style.transition = "left 1s";
        setTimeout(() =>{document.getElementById("reg_div").style.display="none";
        document.getElementsByClassName("god_cross")[0].style.color="black";
    },500);
        setTimeout(() =>{
            document.getElementById('login_head_chage').innerHTML="don't have a account?";
        document.getElementById('login_change').innerHTML="Sign up and discover a great<br> amount of new opportunities!";
        document.getElementById('sign_in').innerHTML="Sign up";
        document.getElementsByClassName("changer")[0].style.width="40vw";
        document.getElementById('login_div').style.display="block";
        // z.style.right="250px";
        // a.style.top="430px";
        a.style.left="8vw";
        // x.style.left="50px";
        },500);
        count++;
    }
    
}

function cross_goback(){
    window.location.href="../index.html";
}
