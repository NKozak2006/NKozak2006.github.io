function lyr_but() {
    document.getElementById("lyr").style.display = "block";
    document.getElementById("cont_bg").style.display = "none";
    document.getElementById("mus").style.display = "none";
    document.getElementById("lyr_but").style.background = "rgb(79, 0, 0)";
    document.getElementById("bg_but").style.background = "none";
    document.getElementById("mus_but").style.background = "none";
}

function bg_but() {
    document.getElementById("lyr").style.display = "none";
    document.getElementById("cont_bg").style.display = "block";
    document.getElementById("mus").style.display = "none";
    document.getElementById("lyr_but").style.background = "none";
    document.getElementById("bg_but").style.background = "rgb(79, 0, 0)";
    document.getElementById("mus_but").style.background = "none";
}

function mus_but() {
    document.getElementById("lyr").style.display = "none";
    document.getElementById("cont_bg").style.display = "none";
    document.getElementById("mus").style.display = "block";
    document.getElementById("lyr_but").style.background = "none";
    document.getElementById("bg_but").style.background = "none";
    document.getElementById("mus_but").style.background = "rgb(79, 0, 0)";
}