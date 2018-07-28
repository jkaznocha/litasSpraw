
//     var form = document.getElementById("formularz");

//     var list=document.getElementById("mylist");
//     var listelement='<input type="submit" value="Zrobione" class="sub1"/><input type="submit" value="Usuń" class="sub2"/>';
//     var button ='';
//     var button2='';

//     form.onsubmit = function (e) 
//     {
//         e.preventDefault();
//     }


// function showValue(li)
// {   
//     var textplace=document.getElementById("textplace").value;
//     //alert(textplace);
    
//     if(textplace=="")
//     {
//         alert("Wpisz zadanie!");
//     }else
//     if (textplace!=0)
//     {    
//         li=document.createElement("li");
//         li.innerHTML=textplace+listelement;
//         list.appendChild(li);

//     //dodaje elementy do listy z pobraną wartością z pola tekstowego
//     }
    
//     //button=li.children[0];

//     button=li.querySelector('.sub1');

//     button.addEventListener('click',function itsDone(){

//                             var parent= this.parentNode;

//                             parent.classList.add('itsDone');

//                             console.log(parent);
//                             });
    
//     button2=li.querySelector('.sub2');

//     button2.addEventListener('click',function remove(){

//                             var parent= this.parentNode;
        
//                             parent.parentNode.removeChild(parent);
//                             });
   
// }

function stworzElement (nazwa) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var button = document.createElement("button");

    span.innerText = nazwa;
    button.innerText = "Usuń";
    button.addEventListener("click", function (e) {
        usunZadanie(li);
    });

    li.appendChild(span);
    li.appendChild(button);

    return li;
}

function dodajZadanie (nazwa) {
    var element = stworzElement(nazwa);
    lista.appendChild(element);
    //dodanie nazwy do elementu

    //dodanie elementu do listy
}

function oznaczJakoWykonane (element) {
    //sprawdź czy wykonane
    //jesli wykonane oznacz jako nie wykonane
    //jeśli nie wykonane oznacz jako wykonane
}

function usunZadanie (element) {
    //znajdź rodzica elementu
    //usuń element z rodzica
    lista.removeChild(element);
}

var formularz = document.getElementById("formularz");
var lista = document.getElementById("mylist");
var pole = document.getElementById("textplace");

formularz.addEventListener("submit", function (e) {
    e.preventDefault();
    var wartosc = pole.value;
    dodajZadanie(wartosc);
});
