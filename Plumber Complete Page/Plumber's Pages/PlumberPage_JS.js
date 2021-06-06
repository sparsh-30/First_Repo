function bill_summary(){
    var ch=document.getElementsByClassName('form-check-input');
    var str="<tr><th>"+"Plumbing Type"+"</th><th>"+"Part Name"+"</th><th>"+"Price(INR)"+"</th></tr>";
    var total=0;
    for(var i=0;i<12;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Installation"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }

    for(var i=12;i<16;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Replacement"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }

    for(var i=16;i<21;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Repairing"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }
    
    var output=total.toLocaleString('en-US');

    document.getElementById('demo_table').innerHTML=str;
    document.getElementById('demo').innerHTML=output;
    
}