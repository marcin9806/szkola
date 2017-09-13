function poleProstokata(a,b)
{
    var pole=a*b;
    return pole;
}

var elPrzycisk=document.getElementById("przycisk");
var elWyswietl=document.getElementById("wyswietl");

function wyswietlPole()
{
    
    var elWysokosc=document.getElementById("wysokosc").value;
    var elSzerokosc=document.getElementById("szerokosc").value;
    console.log(elSzerokosc);
    console.log(elSzerokosc);
    elWyswietl.innerHTML = poleProstokata(elWysokosc,elSzerokosc);
}