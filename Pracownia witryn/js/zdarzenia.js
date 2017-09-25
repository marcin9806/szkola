var elImie=document.getElementById("imie");
var elNazwisko=document.getElementById("nazwisko");
var elLogin=document.getElementById("login");
var elMail1=document.getElementById("mail1");
var elMail2=document.getElementById("mail2");
var elPass1=document.getElementById("pass1");
var elPass2=document.getElementById("pass2");
var elData=document.getElementById("data");
var elRegulamin=document.getElementById("regulamin");
var elPrzycisk=document.getElementById("przycisk");
var elPopraw=document.getElementById("popraw");
var elBlok=document.getElementById("blok");

//window.onload = function(){alert("xx");}

/*elImie.onblur = function ()
{
    if(elImie.value.length > 2 && elImie.value.length < 15) elBlok.innerHTML = "";
    else elBlok.innerHTML = "Błędne dane";
}*/

/*function sprawdz()
{
    if(elImie.value.length > 2 && elImie.value.length < 15) elBlok.innerHTML = "";
    else elBlok.innerHTML = "Błędne dane";
}
imie.addEventListener("blur",sprawdz);*/

function blokuj()
{
    var blokuj=document.getElementById(this.id);
    blokuj.disabled=true;
}

function sprawdz()
{
    var element=document.getElementById(this.id);
    if(element.value.length > 2 && element.value.length < 15) elBlok.innerHTML = "";
    else
    {
        elBlok.innerHTML = "Błędne dane";
        element.focus();
    }
}

function mail()
{
    if(elMail1.value!=elMail2.value)
    {
        elBlok.innerHTML = "Adresy się nie zgadzają";
        elMail1.focus();
        elMail1.value="";
        elMail2.value="";
        elMail1.disabled=false;
    }
    else 
    {
        elBlok.innerHTML = "";
    }
}

imie.addEventListener("blur",sprawdz);
nazwisko.addEventListener("blur",sprawdz);
login.addEventListener("blur",sprawdz);
mail2.addEventListener("blur",mail);
mail1.addEventListener("blur",blokuj);