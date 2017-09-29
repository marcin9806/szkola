var text;
var pole=document.getElementById("kod");
//var regEx = /szkół/;
//var regEx = /szkół/i; //true - bez zwracania uwagi na wielkosc liter
//var regEx = /^Zespół/; //true - tekst musi być na samym początku
//var regEx = /Komunikacji$/; //true - tekst musi być na samym końcu
//var regEx = /[a-z]/; //true - przedział - dowolna ilość liters
//var regEx = /[A-Z]/; //true - przedział, duże litery
//var regEx = /[A-z]/; //true - przedział, duże i małe litery
//var regEx = /[A-z]{1}/; //false - przedział, duże i małe litery, jeden znak
//var regEx = /[ó]|[A-z]/; //true - jeden LUB drugi przedział
//var regEx = /+@/; //false - 1 lub więcej znaków @
//var regEx = /[A-z]?@/; //1 lub 0 znaków [A-z] przed @
//var regEx = /^Zespó[ł]?@/; //"Zespó" oraz 1 lub 0 znaków [ł] przed @
//var regEx = /^Zespó[ł]*@/; //"Zespó" oraz dowolna ilość znaków [ł] przed @
//var regEx = /[a]{3}/; //przynajmniej 3 znaki a w ciągu
//var regEx = /[^a-z$]{3,4}/; //od 3 do 4 znaków
//var regEx = /[^a-z$]{3,}/; //od 3 znaków
//var regEx = /./; //dowolny 1 znak
//var regEx = /\./; //kropka
//var regEx = /\w/; //word - litery duże, małe, cyfry, znak podkreślenia
//var regEx = /\W/; //bez liter, cyfr, znaków podkreślenia
//var regEx = /\d/; //cyfry
//var regEx = /\D/; //bez cyfr
//var regEx = /\D/; //bez cyfr
//var regEx = /\s/; //spacja
//var regEx = /\S/; //brak spacji
//var regEx = /(tekst){2}/; //grupa - ma wystąpić x razy obok siebie
var regEx=/^\d{2}-\d{3}$/;

pole.oninput=function(){
    text=pole.value;
    var sprawdz = regEx.test(text);
    if(sprawdz==true)
    {
        document.getElementById("blok").innerHTML="Dobrze";
    }
    else
    {
        document.getElementById("blok").innerHTML="Żle";
    }
}

