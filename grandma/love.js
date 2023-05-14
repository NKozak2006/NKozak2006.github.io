var x = 0;

function first() {
    switch(x) {
        case 0:
            document.getElementById("fill").innerHTML = "9x - 7i > 9x - 21u";
            x = 1;
            break;
        case 1:
            document.getElementById("fill").innerHTML = "- 7i > - 21u";
            x = 2;
            break;
        case 2:
            document.getElementById("fill").innerHTML = "7i < 21u";
            x = 3;
            break;
        case 3:
            document.getElementById("fill").innerHTML = "i<3u";
            x = 4;
            document.getElementById("love").style = "visibility: visible";
            break;
    }
}