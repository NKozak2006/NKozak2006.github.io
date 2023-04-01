var a = 0;

function disp() {
    if (a==0) {
        document.getElementById("quirky").style = "animation: displayin 0.5s ease-out; height: 300px;";
        document.getElementById("form").style = "animation: borderout 0.5s linear; border-bottom-left-radius: 0; border-bottom-right-radius: 0;";
        document.getElementById("image").style = "transform: rotate(-90deg);";
        a = 1;
    }
    else if (a==1) {
        document.getElementById("quirky").style = "animation: displayout 0.5s ease-in; height: 0;";
        document.getElementById("form").style = "animation: borderin 0.5s linear; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;";
        document.getElementById("image").style = "transform: rotate(0deg);";
        a = 0;
    }
}

function main() {
    var b = document.getElementById("fn").value;
    document.getElementById("out").innerHTML = "Thank You For Your Feedback " + b + "!<br>We Value All of Our Customers' Thoughts!";
    document.getElementById("msg").style = "top: 50%;";
}

function ret() {
    document.getElementById("msg").style = "top: -50%;";
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("feed").value = "";
}

$(document).ready(function() {
    $("form").submit ( function(){
        main();
        a = 1;
        disp();
        return false;
    });
    $("input").on ({
        focus: function() {
            $(this).css("background","#2F3CBE");
            $(this).css("border-color","#C011D7");
            $(this).css("color","white");
        },
        blur: function() {
            $(this).css("background","#C011D7");
            $(this).css("border-color","#2F3CBE");
            $(this).css("color","black");
        }
    });
    $("textarea").on ({
        focus: function() {
            $(this).css("background","#2F3CBE");
            $(this).css("border-color","#C011D7");
            $(this).css("color","white");
        },
        blur: function() {
            $(this).css("background","#C011D7");
            $(this).css("border-color","#2F3CBE");
            $(this).css("color","black");
        }
    });
})