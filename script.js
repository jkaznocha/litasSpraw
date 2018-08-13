function stworzElement (nazwa) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var button = document.createElement("button");
   
    span.innerText = nazwa;
    button.innerText = "Usuń";
    button.addEventListener("click", function (e) {
        usunZadanie(li);
        e.stopPropagation();
    });

    li.appendChild(span);
    li.appendChild(button);
    li.addEventListener("click", function (e) {
        oznaczJakoWykonane(li);
    });

    return li; //zwraca 
}

function dodajZadanie (nazwa) {
    var element = stworzElement(nazwa); //muszą być () i jak ma to argumenty w zmiennej element mam to co zwróciła funkcja
    lista.appendChild(element);
    tablica.push(nazwa);
    wczytaj();
}

var tablica = [];
var zadanie = [];  

function wczytaj(nmb){
        
    for(var i=0; i<tablica.length; i++){
    nmb = tablica[i];
    localStorage.setItem("zadanie:"+nmb, nmb);// jeśli treść każdego zadania jest inna to ją chowa w pamięci
    }  
    zadanie.push(localStorage.getItem("zadanie:"+nmb));
    return zadanie;
}


function oznaczJakoWykonane (element) {
    var posiada = element.classList.contains("done");
   
    if (posiada) {
        element.classList.remove("done");
    } else {
        element.classList.add("done");
    }
}

function usunZadanie (element) {
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

