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

function poleObjetosc(szerokosc, dlugosc, wysokosc)
{
    var pole = szerokosc*dlugosc;
    var objetosc = pole*wysokosc;
    var wynik = [pole,objetosc];
    return wynik;
}

x=prompt("Podaj wartosc","0-pole,1-objetosc");

console.log(poleObjetosc(2,3,4));
console.log(poleObjetosc(2,3,4)[x]);

console.log(Math.PI);

/*-------------------------
Napisz skrypt obliczający obwód, pole i objętość stożka. Dane user podaje w formularzu. Wykorzystać Math.PI. User wybiera za pomocą pola radio co chce obliczyć. Wynik wyświetlany w bloku.
---------------------------*/