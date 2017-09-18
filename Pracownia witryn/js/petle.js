for(var i=0;i<=10;i++)
{
    if (i==6) break;
}

//losuj 100 liczb z przedziału od 10 do 100

/*for (var i=1;i<101;i++)
{
    document.write(i+": "+(Math.floor(Math.random()*91)+10)+"<br>")
}*/

for(var i=1;i<=10;i++)
{
    document.write(i);
    if(i==1) {document.write(" raz<br>");}
    else {document.write(" razy<br>")};
}

//user podaje z klawiatur wartosc poczatkowa i koncowa petli. po kazdej liczbie podaj przecinek, a tylko po ostatniej kropke. Pierwsza liczba musi byc mniejsza od drugiej.

/*var a=prompt("Podaj pierwsza liczbe");
var b=prompt("Podaj ostatnia liczbe");
if(a>b)
{
    alert("Podales zle liczby");
}
else
{
    for(;a<=b;a++)
    {
        if(a==b) {document.write(a+".");}
        else 
        {
            document.write(a+", ");
        }
    }
}*/

/*var i=0;

while(i++ <5)
{
    document.write(i + "<br>");
}

var x=0;
var y=0;

while (x>=y)
{
    x=Number(prompt("Podaj x"));
    y=Number(prompt("Podaj y"));
}
document.write("Podales poprawne wartosc: <br>x="+x+", y="+y);*/
/*var wiek;
do
{
    wiek=prompt("Podaj wiek");
}
while (wiek != 18)
alert("Masz "+wiek+" lat");*/

//wykorzystaj petle for i do..while - podaj 5 liczb podzielnych przez 2 z klawiatury. zapisz je do tablicy i wyświetl w konsoli
/*var liczby = new Array(5);
var aktualna=1;
for(var i=0;i<5;i++)
{
    do
    {
        liczby[i]=prompt("Podaj "+(i+1)+" liczbe");
    }
    while (Number(liczby[i]%2)!=0)
}
console.log(liczby);*/



//uzytkownk podaje z klawiatury liczbe. zabezpiecz przed podaniem litery, znaku specjalnego
/*document.write('<input type="text" id="liczba"><br><input type="button" value="Wyslij" id="przycisk"><br><h2 id="wynik"></h2>');
document.getElementById("przycisk").onclick=function()
{
    var liczba=document.getElementById("liczba").value;
    if (isNaN(liczba)) document.getElementById("wynik").innerHTML="Podaj prowidlowa liczbe";
    else document.getElementById("wynik").innerHTML="Podales dobra liczbe";
}*/



//program wyswietlajacy liczby 1-10 w 5 rzedach. po kazdej liczbie przecinek, po ostatniej w kazdym rzedzie kropka.
/*for(var i=1;i<6;i++)
{
    for(var j=1;j<11;j++)
    {
        document.write(j);
        if(j==10) document.write(".<br>");
        else document.write(", ");
    }
}*/
/*document.write('<div class="center">');
for(var k=1;k<60;k++)
{
    for(var i=0;i<k;i++)
    {
        document.write("*");
    }
    document.write("<br>");
}
document.write('</div>');*/

//podaj z klawiatury maksymalna ilosc gwiazdek, zrob petle w ktorej zabezpieczysz przed podaniem blednych danych. 

/*var liczba;
do
{
    liczba=prompt("podaj liczbe poziomow");
}
while(isNaN(liczba)||liczba<1)
document.write('<div class="choinka">');
for(var k=1;k<Number(liczba)+1;k++)
{
    for(var i=0;i<k;i++)
    {
        document.write("*");
    }
    document.write("<br>");
}
document.write('</div>');*/

//uzytkownik podaje login i haslo z klawiatury w formularzu. jesli login to admin a haslo to tajne@123 to na ekranie wyswietli sie w kolorze czerwonym "poprawne haslo"s

/*var elPrzycisk=document.getElementById("przycisk");
var elHaslo=document.getElementById("haslo");
var elLogin=document.getElementById("login");
var elNapis=document.getElementById("napis");
elPrzycisk.onclick=function()
{
    if(elHaslo.value=="tajne@123" && elLogin.value=="admin") 
    {
        elNapis.innerHTML="Poprawne haslo";
        elNapis.style.color="red";
    }
    else
    {
        elNapis.innerHTML="Zle haslo";
        elNapis.style.color="White";
    }
}*/



//foreach

var tab=["Anna","Jacek","Janusz","Adrian"];

for(var i=0;i<=tab.length-1;i++)
{
    document.write(tab[i]+"<br>");
}

function p(a,b)
{
    document.write(a+" ");
}

tab.forEach(p);