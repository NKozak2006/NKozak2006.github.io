var dark = 0;

function formSub() {
    if (document.getElementById("email").value != "" && document.getElementById("type").value != "" && document.getElementById("inq").value != "") {
        if (document.getElementById("name").value == "" && document.getElementById("type").value != "other") {
            document.getElementById("name").value = "Anonymous";
        } else if (document.getElementById("name").value == "" && document.getElementById("type").value == "other" && document.getElementById("other").value != "") {
            document.getElementById("name").value = "Anonymous";
        }
        if (document.getElementById("other").value == "" && document.getElementById("type").value != "other") {
            document.getElementById("other").value = "N/A";
        }
    }
}

function toggled() {
    if (dark == 0) {
        document.body.style.background = "black";
        document.getElementById("cont").style.border = ".5vw white solid";
        document.getElementById("cont").style.background = "rgb(11, 43, 92)";
        var text = document.getElementsByClassName("text");
        for (var i = 0; i < text.length; i++) {
            text[i].style.color = "White";
        }
        var bg = document.getElementsByClassName("bg");
        for (var j = 0; j < bg.length; j++) {
            bg[j].style.background = "rgb(66, 69, 98)";
        }
        var border = document.getElementsByClassName("border");
        for (var k = 0; k < border.length; k++) {
            border[k].style.border = ".25vh solid rgb(146, 28, 28)";
        }
        document.getElementById("submit").style.color = "White";
        dark = 1;
    } else if (dark == 1) {
        document.body.style.background = "white";
        document.getElementById("cont").style.border = ".5vw black solid";
        document.getElementById("cont").style.background = "rgb(21, 83, 176)"
        var text = document.getElementsByClassName("text");
        for (var i = 0; i < text.length; i++) {
            text[i].style.color = "Black";
        }
        var bg = document.getElementsByClassName("bg");
        for (var j = 0; j < bg.length; j++) {
            bg[j].style.background = "rgb(150, 155, 197)";
        }
        var border = document.getElementsByClassName("border");
        for (var k = 0; k < border.length; k++) {
            border[k].style.border = ".25vh solid rgb(255, 67, 67)";
        }
        document.getElementById("submit").style.color = "Black";
        dark = 0;
    }
}

$(document).ready(function(){
    $("#type").change(function(){
        if (document.getElementById("type").value == "other") {
            $("#olabel").show();
            $("#oreq").show();
            $("#br1").show();
            $("#br2").show();
            document.getElementById("other").required = "true";
            $("#other").show();
        } else {
            $("#olabel").hide();
            $("#oreq").hide();
            $("#br1").hide();
            $("#br2").hide();
            document.getElementById("other").removeAttribute("required");
            $("#other").hide();
        }
    });
});