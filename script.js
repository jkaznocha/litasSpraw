
    var form = document.getElementById("formularz");

    var list=document.getElementById("mylist");
    var listelement='<input type="submit" value="Zrobione" class="sub1"/><input type="submit" value="Usuń" class="sub2"/>';
    var button ='';
    var button2='';

    form.onsubmit = function (e) 
    {
        e.preventDefault();
    }


function showValue(li)
{   
    var textplace=document.getElementById("textplace").value;
    //alert(textplace);
    
    if(textplace=="")
    {
        alert("Wpisz zadanie!");
    }else
    if (textplace!=0)
    {    
        li=document.createElement("li");
        li.innerHTML=textplace+listelement;
        list.appendChild(li);

    //dodaje elementy do listy z pobraną wartością z pola tekstowego
    }
    
    //button=li.children[0];

    button=li.querySelector('.sub1');

    button.addEventListener('click',function itsDone(){

                            var parent= this.parentNode;

                            parent.classList.add('itsDone');

                            console.log(parent);
                            });
    
    button2=li.querySelector('.sub2');

    button2.addEventListener('click',function remove(){

                            var parent= this.parentNode;
        
                            parent.parentNode.removeChild(parent);
                            });
   
}

