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

var regImie=/^[A-z]{2,16}$/;
var regNazwisko=/^[A-z]{2,25}(\-[A-z]{2,25})?$/;
var regLogin=/^(\w|\W){6,25}$/;
var regMail=/^([a-z,0-9,\-,_,\.]\.?)*@(\.?[a-z,0-9,\-,_])*\.[a-z]{1,3}$/;
var regHaslo=/^$/;
duże, małe, cyfry, znak, 8 znaków


function sprawdz()
{
    var element=document.getElementById(this.id);
    switch(this.id)
    {
        case "imie":
            if(regImie.test(element.value)) elBlok.innerHTML = "";
            else
            {
                elBlok.innerHTML = "Błędne imię";
                element.focus();
            }
        break;
        case "nazwisko":
            if(regNazwisko.test(element.value)) elBlok.innerHTML = "";
            else
            {
                elBlok.innerHTML = "Błędne nazwisko";
                element.focus();
            }
        break;
        case "login":
            if(regLogin.test(element.value)) elBlok.innerHTML = "";
            else
            {
                elBlok.innerHTML = "Błędny login";
                element.focus();
            }
        break;
        case "mail1":
            if(regMail.test(element.value))
            {
                elBlok.innerHTML = "";
                element.disabled="true";
                elMail2.focus();
            }
            else
            {
                elBlok.innerHTML = "Błędny mail";
                element.focus();
            }
        break;
        case "mail2":
            if(elMail1.value!=elMail2.value)
            {
                elBlok.innerHTML = "Adresy się nie zgadzają";
                elMail1.focus();
                elMail1.disabled=false;
            }
            else 
            {
                elBlok.innerHTML = "";
            }
        break;
    }
}
imie.addEventListener("blur",sprawdz);
nazwisko.addEventListener("blur",sprawdz);
login.addEventListener("blur",sprawdz);
mail1.addEventListener("blur",sprawdz);
mail2.addEventListener("blur",sprawdz);