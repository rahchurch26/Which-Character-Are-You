$("button").click(function(){
    var blood=$(".first").val();
    var style=$(".second").val();
    if(blood < 5 && style==="serious"){
        $("h1").text("Gohan");
        $("body").css("background-color", "blue");
        $("h2").hide();
        $("input").hide();
        $("button").hide();
        $("p").hide();
        $(".Gohan").show();
    }else if(blood>=5 && style==="serious"){
        $("h1").text("Jotaro Kujo");
        $("body").css("background-color", "purple");
        $("h2").hide();
        $("input").hide();
        $("button").hide();
        $("p").hide();
        $(".JoJo").show();
    }else if(blood<5 && style==="charismatic"){
        $("h1").text("Spiderman");
        $("body").css("background-color", "red");
        $("h2").hide();
        $("input").hide();
        $("button").hide();
        $("p").hide();
        $(".Spider").show();
    }else if(blood>=5 && style==="charismatic"){
        $("h1").text("Johnny Cage");
        $("body").css("background-color", "orange");
        $("h2").hide();
        $("input").hide();
        $("button").hide();
        $("p").hide();
        $(".Cage").show();
    }else{
        $("h1").text("SO WE CAN'T READ NOW!");
        $("h2").hide();
        $("input").hide();
        $("button").hide();
        $("p").hide();
    }
});