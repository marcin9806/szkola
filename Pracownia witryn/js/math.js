console.log(Math.sqrt(16)); //pierwiastek
var a=13.99;
var b=28.5;
var minimalna=Math.min(a,b);
var maksymalna=Math.max(a,b);
console.log("Min: "+minimalna);
console.log("Max: "+maksymalna);
var zaokraglenie=Math.round(a);
console.log(zaokraglenie);

//abs, round, floor

var x = -65;
var y = -13.1;
var z = 14.9;

document.write('<br>Abs: '+Math.abs(x));
document.write('<br>Abs: '+Math.abs(y));
document.write('<br>Abs: '+Math.abs(z));
document.write('<br>');
document.write('<br>Round: '+Math.round(x));
document.write('<br>Round: '+Math.round(y));
document.write('<br>Round: '+Math.round(z));
document.write('<br>');
document.write('<br>Floor: '+Math.floor(x));
document.write('<br>Floor: '+Math.floor(y));
document.write('<br>Floor: '+Math.floor(z));

//potegowanie
var p=Math.pow(2,10);
console.log(p);

//losowanie
var losuj=Math.random();
console.log(losuj);

var liczba=Math.floor(Math.random()*11);
console.log(liczba);