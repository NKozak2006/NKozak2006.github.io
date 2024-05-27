var t = 0;

function theDoor() {
    if (t == 0) {
        alert("You knock once...");
        t++;
    } else if (t == 1) {
        alert("You knock twice...");
        t++;
    } else if (t == 2) {
        alert("You knock thrice...");
        alert("You hear a rumling!");
        document.getElementById("shook").style.animation = "shake 1s linear";
        document.getElementById("shook").style.background = "black";
        document.getElementById("shook").style.color = "black";
        document.getElementById("shook").style.border = "3px black solid";
        setTimeout(moveSide, 1005);
        
    }
}

function zoom() {
    document.getElementById("shook").style.position = "fixed";
    document.getElementById("shook").style.width = "101vw";
    document.getElementById("shook").style.height = "103vh";
    document.body.style.overflow = "hidden";
    setTimeout(redir, 1500)
}

function moveSide() {
    document.getElementById("shook").style.left = "0";
    document.getElementById("shook").style.transform = "translateX(-14%) translateY(-64%)";
    setTimeout(zoom, 500);
}

function redir() {
    location.href = "./Secret/index.html";
}