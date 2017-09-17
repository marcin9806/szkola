function funkcja(form)
{
    var radio=form.radio.value;
    var wyswietl=document.getElementById("wyswietl");
    var r = form.r.value;
    var l = form.l.value;
    var H = form.H.value;
    form.r.style.backgroundColor="White";
    form.l.style.backgroundColor="White";
    form.H.style.backgroundColor="White";
    switch(radio)
    {
        case "p":
            if(r==0 || l==0)
            {
                wyswietl.innerHTML="Wpowadz potrzebne dane";
                form.r.style.backgroundColor="Pink";
                form.l.style.backgroundColor="Pink";
            }
            else wyswietl.innerHTML=(Math.PI*r)*(l+r);
        break;
        case "obw":
            if(r==0)
            {
                wyswietl.innerHTML="Wpowadz potrzebne dane";
                form.r.style.backgroundColor="Pink";
            }
            else wyswietl.innerHTML=2*Math.PI*r;
        break;
        case "obj":
            if(r==0 || H==0)
            {
                wyswietl.innerHTML="Wpowadz potrzebne dane";
                form.r.style.backgroundColor="Pink";
                form.H.style.backgroundColor="Pink";
            }
            else wyswietl.innerHTML=Math.PI*Math.pow(r,2)*H/3;
        break;
        default:
            wyswietl.innerHTML="Wybierz typ dzialania";
        break;
    }
}
