var kolory = ["czerwony", "zielony", "czarny"];
console.log(kolory[0]);

var samochody = new Array("BMW","Audi","Ferrari");
console.log(samochody[0]);
console.log(samochody[samochody.length-1]);
console.log(samochody.length);
console.log(samochody);

var tab = new Array(
    new Array("Janusz","Kowal","Poznań"),
    new Array("Janusz","Kowal","Poznań"),
    new Array("Anna","Nowak","Gniezno"),
);
console.log(tab[2][1]);

var imiona = ["Janusz", "Anna", "Krystyna", "Zenek"];
console.log(imiona);
var posortowane=imiona.sort();
console.log(posortowane);
var odwrotnosc=posortowane.reverse();
console.log(odwrotnosc);
console.log(odwrotnosc.indexOf("Krystyna")); //1
console.log(odwrotnosc.indexOf("Krystynaa")); //-1
odwrotnosc.pop(); //usuniecie ostatniego wpisu
console.log(odwrotnosc);
odwrotnosc.push("nowy"); //dodanie rekordu na końcu
odwrotnosc.unshift("pierwszy"); //dodawanie rekordu na poczatku
console.log(odwrotnosc);

//sortowanie liczb

var liczby = [1, 2, 20, 190, -1, 1000000]
console.log(liczby);
liczby = liczby.sort(function(a,b){
    return (a-b);
});
console.log(liczby);

/*Utwórz formularz z loginem i hasłem. Zapisz dane w tablicy. Wyświetl w h2. Użytkownik podaje również kolor w jakim tekst ma być wyświetlony.*/