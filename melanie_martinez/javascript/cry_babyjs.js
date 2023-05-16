function lyr_but() {
    document.getElementById("lyr").style.display = "block";
    document.getElementById("cont_bg").style.display = "none";
    document.getElementById("mus").style.display = "none";
    document.getElementById("lyr_but").style.background = "#e4d6e5";
    document.getElementById("bg_but").style.background = "none";
    document.getElementById("mus_but").style.background = "none";
    document.getElementById("but_1").style.visibility = "visible";
    document.getElementById("but_2").style.visibility = "hidden";
    document.getElementById("but_3").style.visibility = "hidden";
}

function bg_but() {
    document.getElementById("lyr").style.display = "none";
    document.getElementById("cont_bg").style.display = "block";
    document.getElementById("mus").style.display = "none";
    document.getElementById("lyr_but").style.background = "none";
    document.getElementById("bg_but").style.background = "#e4d6e5";
    document.getElementById("mus_but").style.background = "none";
    document.getElementById("but_1").style.visibility = "hidden";
    document.getElementById("but_2").style.visibility = "visible";
    document.getElementById("but_3").style.visibility = "hidden";
}

function mus_but() {
    document.getElementById("lyr").style.display = "none";
    document.getElementById("cont_bg").style.display = "none";
    document.getElementById("mus").style.display = "block";
    document.getElementById("lyr_but").style.background = "none";
    document.getElementById("bg_but").style.background = "none";
    document.getElementById("mus_but").style.background = "#e4d6e5";
    document.getElementById("but_1").style.visibility = "hidden";
    document.getElementById("but_2").style.visibility = "hidden";
    document.getElementById("but_3").style.visibility = "visible";
}