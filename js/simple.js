function putName(arr){
    var sp_change=document.getElementById("name_dis");
    var lod_show=document.getElementById("log_bar_cli");
    if(arr.length==0){
        sp_change.style.display="none";
        lod_show.style.display="inline-block";
    }
    else{
        
        var user_name=arr[0];
        sp_change.style.display="inline-block";
        sp_change.innerHTML="Welcome"+"&nbsp;"+"Back!"+"&ensp;"+user_name;
        lod_show.style.display="none";
    }
}
function getting_name(){
    var retrieve=localStorage.getItem('det');
    var arre=JSON.parse(retrieve);
    putName(arre);
}
function log_out(){
    arr=[];
    var a= JSON.stringify(arr)
    localStorage.setItem("det",a);
    window.location.reload();
}