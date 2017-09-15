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

var a=prompt("Podaj pierwsza liczbe");
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
}