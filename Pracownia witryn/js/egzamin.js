var elPodstawa=document.getElementById("podstawa");
var elStopien=document.getElementById("stopien");
var elWynik=document.getElementById("wynik");
var elPrzycisk=document.getElementById("przycisk");
var wynik;

elPrzycisk.onclick=function(){
    if(elPodstawa.value==""||elStopien.value=="") elWynik.innerHTML="Podaj poprawne liczby";
    else
    {
        if(parseInt(elStopien.value)<1) elWynik.innerHTML="Wykladnik musi byc dodatni";
        else
        {
            wynik=Math.pow(parseInt(elPodstawa.value),parseInt(elStopien.value));
            elWynik.innerHTML=wynik;
        }
    }
}