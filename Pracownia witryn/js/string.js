document.write("xx");

var text="ZSK - Zespół Szkół Komunikacji";

console.log("Długość tekstu: "+text.length);

var pierwszy = text.charAt(0);

console.log("Pierwsza litera: "+pierwszy);

var ostatni = text.charAt(text.length-1);

console.log("Ostatnia litera: "+ostatni);

//ASCII

console.log(text.charCodeAt(0));

var duze=text.toUpperCase();

console.log(duze);

var male=text.toLowerCase();

console.log(male);

var duzaMale = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
console.log(duzaMale);

var podaj = prompt("podaj wartość");
podaj=podaj.charAt(0).toUpperCase() + podaj.slice(1).toLocaleLowerCase();
var elNaglowek = document.getElementById("nagl");
console.log(podaj.substr(1,podaj.length-2));
elNaglowek.textContent = podaj;