t = 0;

function pgLoad() {
    if (t == 0) {
        document.title = ".";
        t++;
    } else if (t == 1) {
        document.title = "..";
        t++;
    } else if (t == 2) {
        document.title = "..."
        t = 0;
    }
    setTimeout(pgLoad, 500);
}

var i = 0;
var txt = "Well...";
var speed = 50;
var x = 0;
var char = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("head").innerHTML += txt.charAt(i);
    i++;
    char++;
    setTimeout(typeWriter, speed);
  } else {
    if (x == 0) {
        i = 0;
        txt = "you found my secret";
        x++;
        setTimeout(typeWriter, 1000);
    } else if (x == 1) {
        x++;
        setTimeout(deleteText, 1500);
    } else if (x == 3) {
        x++;
        setTimeout(deleteText, 1500);
    } else if (x == 5) {
        x++;
        setTimeout(deleteText, 1500)
    } else if (x == 10) {
        x++;
        setTimeout(deleteText, 3000);
    }
    
  }
}

function deleteText() {
    var typewrite = document.getElementById("head").textContent;
    if (char >= 0) {
       typewrite = typewrite.slice(0, char);
       char--;
       document.getElementById("head").innerHTML = typewrite;
       setTimeout(deleteText, speed);
    } else {
        if (x == 2) {
            txt = "You must think yourself wise I suppose...";
            i = 0;
            x++;
            setTimeout(typeWriter, 1000);
        } else if (x == 4) {
            i = 0;
            txt = "Well, we'll see how long that lasts...";
            x++;
            setTimeout(typeWriter, 1000);
        } else if (x == 11) {
            i = 0;
            setTimeout(light, 1000);
        } else {
            document.body.style.background = "red";
            setTimeout(function(){document.body.style.transition = "all 0s";}, 1500);
            setTimeout(function(){document.body.style.background = "white"}, 2000);
            setTimeout(function(){document.body.style.background = "black"}, 2250);
            setTimeout(function(){document.body.style.background = "white"}, 2350);
            setTimeout(function(){document.body.style.background = "black"}, 2500);
            setTimeout(function(){document.body.style.background = "white"}, 2600);
            setTimeout(function(){document.body.style.background = "black"}, 2850);
            setTimeout(nextLevel, 3500);
        }
    }
 }

function nextLevel() {
    var obj = document.getElementById("img");
    obj.style.opacity = 1;
    setTimeout(function(){obj.style.transition = "opacity 0.1s"}, 1500);
    setTimeout(function(){obj.style.opacity = "0.2"}, 1505);
    setTimeout(function(){obj.style.opacity = "1"}, 1805);
    setTimeout(function(){obj.style.opacity = "0.1"}, 1910);
    setTimeout(function(){obj.style.opacity = "1"}, 2610);
    setTimeout(function(){obj.style.opacity = "0.2"}, 2710);
    setTimeout(function(){obj.style.opacity = "1"}, 2840);
    setTimeout(function(){obj.style.opacity = "0.05"}, 2940);
    setTimeout(function(){obj.style.opacity = "1"}, 3050);
    setTimeout(function(){obj.style.opacity = "0.1"}, 3130);
    setTimeout(function(){obj.style.opacity = "1"}, 3700);
    setTimeout(function(){obj.style.opacity = "0"}, 3810);
    setTimeout(function(){obj.style.transformOrigin = "70% 0%"}, 4000);
    setTimeout(function(){obj.style.animation = "sway 2s ease-out infinite alternate"}, 4000);
    setTimeout(function(){obj.style.opacity = "1"}, 4050);
    txt = "Don't be afraid";
    x = 10;
    i = 0;
    setTimeout(function(){document.getElementById("head").style.animation = "shake 0.25s linear infinite alternate"}, 5000);
    setTimeout(typeWriter, 4200);
}

function light() {
    var obj = document.getElementById("img");
    setTimeout(function(){obj.style.opacity = "0.2"}, 1505);
    setTimeout(function(){obj.style.opacity = "1"}, 1805);
    setTimeout(function(){obj.style.opacity = "0.1"}, 1910);
    setTimeout(function(){obj.style.opacity = "1"}, 2610);
    setTimeout(function(){obj.style.opacity = "0.2"}, 2710);
    setTimeout(function(){obj.style.opacity = "1"}, 2840);
    setTimeout(function(){obj.style.opacity = "0.05"}, 2940);
    setTimeout(function(){obj.style.opacity = "1"}, 3050);
    setTimeout(function(){obj.style.opacity = "0.1"}, 3130);
    setTimeout(function(){obj.style.opacity = "1"}, 3700);
    setTimeout(function(){obj.style.opacity = "0"}, 3810);
    setTimeout(vidPlay, 4000);
}

function vidPlay() {
    document.getElementById("vid").src = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=uOzzr7rnvU1olSMZ?rel=0&autoplay=1&mute=0&enablejsapi=1";
    document.getElementById("vid").style.visibility = "visible";
}
