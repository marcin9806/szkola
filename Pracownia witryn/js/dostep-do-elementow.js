//metoda getElementById("id");

var elPierwszy=document.getElementById("pierwszy");
elPierwszy.className="niebieski";

//metoda getElementsByTagName

var elNaglowek=document.getElementsByTagName("h2");
if(elNaglowek.length>0)
{
    elNaglowek[0].className="czerwony";
    elNaglowek[1].className="niebieski";
}

//metoda getElementsByClassName

var elCzerwone=document.getElementsByClassName("czerwony");
if(elCzerwone.length>0)
{
    for (var i=0;i<elCzerwone.length;i++)
    {
        elCzerwone[i].style.color="black";
    }
}

//metoda szybsza
var elOstatniS=elCzerwone[elCzerwone.length-1];

//metoda wolniejsza
var elOstatniW=elCzerwone.item(elCzerwone.length-1);

//baaaaaaaaaaaaaardzo przydatna metoda
//metoda getElementsByName
var elAuto=document.getElementsByName("auto");
console.log(elAuto);
elAuto[1].className="niebieski";

//metoda querySelector - zwraca pierwszą wartość:
var elAuto1=document.querySelector("li");
var elAuto1Czerwone=document.querySelector("li.czerwony");
var elAuto1Czerwone=document.querySelector("li.czerwony");
elAuto1.style.color="green";
elAuto1Czerwone.style.textDecoration="underline";

var elPrzycisk=document.getElementById("przycisk");
var elKlub=document.getElementsByName("sport");

function zmien(element, indeks)
{
    elKlub[indeks].className="niebieski";
}
elPrzycisk.onclick = function(){elKlub.forEach(zmien);}

/*elPrzycisk.onclick=function()
{
    console.log(elKlub[2]);
    for(var i=0;i<klub.length;i++)
    {
        elKlub[i].className="niebieski";
    }
}*/

//previousElementSibling, nextElementSibling

var poczatekElement=document.getElementById("s2");
var poprzedniElement=poczatekElement.previousElementSibling;
var nastepnyElement=poczatekElement.nextElementSibling;
poprzedniElement.className="niebieski";
nastepnyElement.className="niebieski";

//firstChild, lastChild


/*
var lista=document.getElementsByTagName("ul")[1];
console.log(lista);
pierwszy=lista.firstElementChild
ostatni=lista.lastElementChild
pierwszy.setAttribute("class","czerwony");
ostatni.setAttribute("style","text-decoration: underline;");*/



text=document.getElementsByTagName("input")[1];
link=document.getElementsByTagName("a")[0];
text.setAttribute("type","button");
text.setAttribute("value","Wyślij");
text.onclick=function(){link.setAttribute("href","http://zsk.poznan.pl/");}










