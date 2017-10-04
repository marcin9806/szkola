//literał obiektu
var janusz = {
    wzrost: 180,
    waga: 79,
    miejsceUrodzenia: "Poznań",
    plec: "m"
};
//utwórz obiekt auto z właśc. marka, model, predkosc i metode wyswietl (marka);
var auto = {
    marka: "Fiat",
    model: "500",
    predkosc: 173,
    wyswietl: function(){return("Marka: " + this.marka);}
};

//console.log(janusz.wzrost);
//document.write(auto.wyswietl());

var ksiazka={
    tytul: "Pan Tadeusz",
    rokWydania: 1834,
    gatunek: "Poemat epicki",
    autor: {
        imie: "Adam",
        nazwisko: "Mickiewicz",
        wyswietlDane(){
            return "Imię: "+this.imie+", Nazwisko: "+this.nazwisko;
        }
    }
};

console.log(ksiazka.autor.imie);
console.log(ksiazka["autor"]["imie"]);
console.log(ksiazka["autor"].imie);
console.log(ksiazka.autor.wyswietlDane());

//***************************************************************************//
var produkt={};
//sprawdzenie czy obiekt ma daną właściwość
console.log(typeof(produkt.nazwa));
//dodanie właściwości i metody do obiektu produkt
produkt.nazwa="Pralka";
produkt.firma="Bosz";
produkt.waga=8;
produkt.cena=1500;
produkt.model="WAK2024i";
produkt.wyswietl=function(){
    return "Nazwa: "+this.nazwa+"<br>Firma: "+this.firma;
};
document.write(produkt.wyswietl());


//*******************************************************************************//
//tablice w obiekcie
var platnosci={
    pokoj1: [50,100],
    pokoj2: [250,1500],
    pokoj3: [350,1600],
    pokoj4: [450,1700],
    suma: function(){
        var suma=0;
        
    }
}
console.log(platnosci.pokoj1[1]);
console.log(platnosci.pokoj3.length);


//***********ZADANIE DOMOWE**************
//stwórz metodę która wyświetli sumę wszystkich płatności ze wszystkich pokojów.


//konstruktory
function Auto(){
    this.marka="Ferrari";
    this.model="f400";
}
var samochod = new Auto();
console.log(samochod.marka);

function Osoba(imie){
    this.imie=imie;
    this.nazwisko="Nowak";
    this.wyswietl=function(){
        return "Imie: "+this.imie+", Nazwisko: "+this.nazwisko;
    }
};

var osoba1 = new Osoba("Janusz");
var osoba2 = new Osoba("Grażyna");
var osoba3 = new Osoba("Brajan");

var daneOsoba1 = osoba1;
console.log(daneOsoba1);