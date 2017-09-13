//document.write('test');

var imie = 'Janusz';
var nazwisko;
nazwisko = "Nowak";
//document.write("Imię: " + imie + "<br>Nazwisko: " + nazwisko);

var wiek1 = 19;
var wiek2 = 20;
var sredniWiek = (wiek1+wiek2)/2;
console.log(sredniWiek);
//alert(sredniWiek);

var a=5, b='3';
var suma=a+b;
console.log(suma);

console.log(10-'20'+30);

var c=10, d=2.5;

var log=true;
var x=null; //object
var y; //undefined
console.log(typeof(log));

var dziesietna=20; //20 dziesiętny
var oktalna=020; //16 ósemkowy
var heksa=0x20; //32 szesnastkowy

console.trace(); //wskazuje w jakim pliku jesteśmy

var name='anna';
name=parseInt(name);
console.log(name);

var j = "1";
j=parseInt(j);
console.log(typeof(j));

var k="4.82936489263";
k=parseFloat(k); //4.82936489263
k=parseInt(k); //4

var age1=prompt("Podaj wiek 1");
var age2=prompt("Podaj wiek 2");
var wynik=(parseInt(age1)+parseInt(age2))/2;
console.log(typeof(age1));
console.log(wynik);

//document.getElementById("naglowek").innerHTML=wynik;
var elNaglowek = document.getElementById("naglowek");
elNaglowek.innerHTML=wynik;
kolor=prompt("Podaj kolor");
elNaglowek.style.color=kolor;