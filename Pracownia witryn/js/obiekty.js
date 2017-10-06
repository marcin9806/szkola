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
    },
    /*wyswietl=function(){
        x=this.length;
        return x;
    }*/
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


var hotel = new Object();
hotel.nazwa="Hotel Poznań";
hotel.pokoje=100;
hotel.pokojeZarezerwowane=24;
hotel.silownia=true;
hotel.rodzajePokoi=["pojedynczy","podwojny","apartament"];
hotel.pokojeWolne=function(){
    return this.pokoje-this.pokojeZarezerwowane;
}
console.log(hotel.pokojeWolne());


//*********************************************************************
//konstruktor obiektów

function Hotel(nazwa, pokoje, pokojeZarezerwowane){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = pokojeZarezerwowane;
    this.wolnePokoje = function(){
        return this.pokoje-this.pokojeZarezerwowane;
    }
}

var lech = new Hotel("Lech",45,30);
var mercury = new Hotel("Mercury",450,300);

document.write("<br><br>Lech: "+lech.wolnePokoje()+"<br>Mercury: "+mercury.wolnePokoje());

//utwórz konstruktor o nazwie pies i parametrach imie, rasa, waga, ulubione zajecia, ktore mogą mieć wiele wartości. utwórz 3 obiekty  nazwach azor, edi, seba

function Pies(imie,rasa,waga,ulubioneZajecia){
    this.imie=imie;
    this.rasa=rasa;
    this.waga=waga;
    this.ulubioneZajecia=ulubioneZajecia;
}

var azor = new Pies("Azor","rasa1",10,["zaj1","zaj2"]);
var saba = new Pies("Saba","rasa2",7 ,["zaj3","zaj5"]);
var edi  = new Pies("Edi", "rasa3",30,["zaj5","zaj6"]);

var psy=[azor,edi,saba];
edi.ulubioneZajecia.push("zaj7");

//console.log(edi.ulubioneZajecia);
//console.log(psy);
var rozmiar;
for(var i=0;i<psy.length; i++)
{
    if(psy[i].waga>10){
        rozmiar="duzy";
    }
    else
    {
        rozmiar="maly";
    }
    document.write('<br>Pies: <span style="color: green;">'+psy[i].imie+"</span> - "+rozmiar+" pies");
}

var tab=["Jan", "Nowak", "Poznań"];
for (var i in tab){
    document.write("<br>"+tab[i]);
}

for (var i in edi){
    if(i=="imie" || i=="rasa") document.write("<br>"+edi[i]);
}

//*************************************************************
//prototype

function Pole(a,b){
    return a*b;
}
console.log(Pole.length);
console.log(Pole.constructor);
console.log(Pole.prototype);

//*************************************************************

function Uczen(imie,nazwisko){
    this.imie=imie;
    this.nazwisko=nazwisko;
}

var adrian=new Uczen("Adrian","Nowak");
Uczen.prototype.narodowosc = "polska";
Uczen.prototype.wyswietlUcznia = function(){
    return "<br>Imie: "+this.imie+"<br>Nazwisko: "+this.nazwisko+"<br>Narodowosc: "+this.narodowosc;
}
document.write(adrian.wyswietlUcznia());
console.log(adrian.constructor);
console.log(adrian.constructor.prototype);

console.log(adrian.hasOwnProperty("narodowosc"));

//utworz konstruktor Rower, w ktorym beda wlasciwosci marka, kolor. Wyswietl wszystkie dane za pomoca metody wyswietlRower. wykorzytaj for in. utworz prototyp ktorym bedzie zapisana ilosc kol.

function Rower(marka, kolor){
    this.marka=marka;
    this.kolor=kolor;
}
Rower.prototype.iloscKol=2;
Rower.prototype.wyswietlRower = function(){
    for(var i in this)
    {
        if(typeof(this[i])!="function")
        {
            document.write("<br>"+i+": "+this[i]);
        }
    }
}

x=new Rower("marka1","zielony");
x.wyswietlRower();

























