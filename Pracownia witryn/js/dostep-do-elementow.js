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

document.getElementById="przycisk".onclick=function()
{
    var elAuta=document.getElementsByTagName("li");
    console.log(elAuta);
    for(var i=0;i<elAuta.length;i++)
    {
        elAuta[i].className="czerwony";
    }
}