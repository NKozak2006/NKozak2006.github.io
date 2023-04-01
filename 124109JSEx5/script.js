var inte = setInterval(placeImage, 1000);
const mons = ["PacificPunch.png", "AussieStyleLemonade.png", "UltraZero.png", "UltraParadise.png", "Tea+Lemonade.png", "PipelinePunch.png", "Papillon.png", "UltraRosa.png", "MangoLoco.png"];
const row1 = document.getElementsByName("row1");
const row2 = document.getElementsByName("row2");
const row3 = document.getElementsByName("row3");
const row4 = document.getElementsByName("row4");
const row5 = document.getElementsByName("row5");
var p = 1;
var m = 0;
var n = 1;
var i;
var r;
var q = 25;

function placeImage() {
    if (n == 1) {
        i = Math.floor(Math.random() * 9);
        document.getElementById("monstimg").src = mons[i];
        if (i == 0) {
            p++
        }
    }
}

function placeImage2() {
    if (m == 1) {
        var x = 0;
        var y = 1;
        while (x < 5) {
            i = Math.floor(Math.random() * 9);
            var z = 0;
            while (z < 5) {
                r = window["row" + y][z].id
                document.getElementById(r).src = mons[i];
                z++
            }
            y++
            x++
        }
        q = q + 25;
    }
}

function starstoimg() {
    if (n == 1) {
        if (m == 0) {
            clearInterval(inte);
            document.getElementById("result").style = "visibility: visible; display: block;";
            document.getElementById("txt").innerHTML = "Here is the first image in the array:"
            document.getElementById("coun").innerHTML = "This image was viewed " + p + " time(s).";
            document.getElementById("butsta").innerHTML = "Start Animation #1";
            m = 1;
        }
        else if (m == 1) {
            inte = setInterval(placeImage, 1000);
            document.getElementById("result").style = "visibility: hidden; display: none;";
            document.getElementById("monstimg").style = "visibility: visible; display: block;";
            document.getElementById("tablemon").style = "visibility: hidden; display: none;";
            document.getElementById("butsta").innerHTML = "Stop Animation #1";
            m = 0;
        }
    }
}

function starstopimg2() {
    if (m == 1) {
        if (n == 0) {
            clearInterval(inte);
            document.getElementById("result").style = "visibility: visible; display: block;";
            document.getElementById("txt").innerHTML = "Here is the first image in the table:"
            document.getElementById("coun").innerHTML = "The animation was stopped after placing a total of " + q + " images in the table.";
            document.getElementById("butsta2").innerHTML = "Start Animation #2";
            n = 1;
        }
        else if (n == 1) {
            inte = setInterval(placeImage2, 1000);
            document.getElementById("result").style = "visibility: hidden; display: none;";
            document.getElementById("monstimg").style = "visibility: hidden; display: none;";
            document.getElementById("tablemon").style = "visibility: visible; display: block;";
            document.getElementById("butsta2").innerHTML = "Stop Animation #2";
            n = 0;
        }
    }
}