function bill_summary(){
    var ch=document.getElementsByClassName('form-check-input');
    var str="<tr><th>"+"Type"+"</th><th>"+"Appliance"+"</th><th>"+"Price(INR)"+"</th></tr>";
    var total=0;
    for(var i=0;i<11;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Installation/Un-Installation"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
            console.log(i);
        }
    }

    for(var i=11;i<17;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Repairing/Replacement"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }

    for(var i=17;i<19;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"On Demand"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }
    
    var output=total.toLocaleString('en-US');

    document.getElementById('demo_table').innerHTML=str;
    document.getElementById('demo').innerHTML=output;
    
}