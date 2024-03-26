var y = 0;

function setup() {
    document.getElementById("f1").value = "Given";
    document.getElementById("f2").value = 1;
    document.getElementById("f3").value = "Phone Dial";
}

function run1() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "1";
    }
}

function run2() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "2";
    }
}

function run3() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "3";
    }
}

function run4() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "4";
    }
}

function run5() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "5";
    }
}

function run6() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "6";
    }
}

function run7() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "7";
    }
}

function run8() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "8";
    }
}

function run9() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "9";
    }
}

function run0() {
    if (y == 0) {
        document.getElementById("text").innerHTML = "";
        y = 1;
    }
    var x = document.getElementById("text").innerHTML.length;
    if (x >= 10) {
        return;
    } else {
        document.getElementById("text").innerHTML += "0";
    }
}

function enter() {
    if (document.getElementById("text").innerHTML.length < 10) {
        alert("Invalid Length!");
    } else {
        if (document.getElementById("text").innerHTML == "7089546535") {
            success();
        } else {
            alert("That is incorrect! Please try again!");
            y = 0;
            document.getElementById("text").innerHTML = "Dial...";
        }
    }
}

function success() {
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("container").style.display = "none";
    document.getElementById("cont").style.visibility = "visible";
    document.getElementById("cont").style.display = "block  ";
    typeWriter();
}

var i = 0;
var txt = 'Your next tag is located where one shares a meal'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("res").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}