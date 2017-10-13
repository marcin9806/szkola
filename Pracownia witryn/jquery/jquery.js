jQuery(document).ready(function(){
    $("#tekst").click(function(){
        $("#lorem").toggle(10);
        $("div").css("background","yellow");

        $(".tekst").css("background","teal");
        $("#id1").css("background","red");
        $("#id1").css({"background":"white","color":"red"});
        $("p").css("font-family","arial","verdana");
        $("p").css({"color":"red","font-size":"120%"});
    })
    $("#zmienKolor").click(function(){
        $("#zmienKolor").css("color","red");
    });
    $("a").css("color","green");
    $("#link a").css("color","red");
});

