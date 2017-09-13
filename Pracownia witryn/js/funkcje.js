function witaj(imie)
{
    document.write("Witaj");
}
function poleProstokata(a,b)
{
    var pole=a*b;
    return pole;
}
var elWysokosc=document.getElementById("wysokosc").value;
var elSzerokosc=document.getElementById("szerokosc").value;
var elPrzycisk=document.getElementById("przycisk");
var elWyswietl=document.getElementById("wyswietl");

function wyswietlPole()
{
    elWyswietl.innerHTML = poleProstokata(elWysokosc,elSzerokosc);
    console.log(elSzerokosc);
    console.log(elSzerokosc);
}

witaj(name);