function bill_summary(){
    var ch=document.getElementsByClassName('form-check-input');
    var str="<tr><th>"+"Cleaning Type"+"</th><th>"+"Category"+"</th><th>"+"Price(INR)"+"</th></tr>";
    var total=0;
    for(var i=0;i<12;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Deep Home Cleaning"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }

    for(var i=12;i<20;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Other House Cleaning"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }

    for(var i=20;i<32;i++)
    {
        if(ch[i].checked===true)
        {
            str+="<tr><td>"+"Car Cleaning"+"</td><td>"+document.getElementById(i).innerHTML+"</td><td>"+ch[i].value+"</td></tr>";
            total+=parseInt(ch[i].value);
        }
    }
    
    var output=total.toLocaleString('en-US');

    document.getElementById('demo_table').innerHTML=str;
    document.getElementById('demo').innerHTML=output;
    
}