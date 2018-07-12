

    

    var list=document.getElementById("mylist");
    var listelement='<input type="submit" value="Zrobione" class="sub1" onclick="itsDone();"/><input type="submit" value="Usuń" class="sub1"/>';

function showValue()
{   
    var textplace=document.getElementById("textplace").value;
    //alert(textplace);
    
    if(textplace=="")
    {
        alert("Wpisz zadanie!");
    }else
    if (textplace!=0)
    {    
        var li=document.createElement("li");
        li.innerHTML=textplace+listelement;
        list.appendChild(li);
    }
        return list;
    //dodaje elementy do listy z pobraną wartością z pola tekstowego
}

//var lista=list,
    
/*
function itsDone()
{
    listelement= '<span class="itsDone">'+textplace+'</span> <input type="submit" value="Zrobione" class="sub1" onclick="itsDone();"/> <input type="submit" value="Usuń" class="sub1"/>';
}

*/




