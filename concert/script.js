document.onkeydown=function(){
    var btn = document.getElementById("button");
    if(window.event.keyCode=='13'){
        btn.click();
    }
}

var yn = "n";
var x = 3;
var names = ["7123514", "7123515", "7123516"];
var refnames = names;

function check() {
    var img = document.getElementById("img");
    var ref = document.getElementById("name").value;
    var name;
    var doc = document.getElementById("note");
    if (ref == names[0]) {
        name = "John";
    } else if (ref == names[1]) {
        name = "Natalie";
    } else if (ref == names[2]) {
        name = "Lillian";
    }
    img.src = "https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif";
    doc.innerHTML = "Thank you for checking in " + name + "!";
    var hold = names.map(function(x){return x.replace(name, "checked");});
    names = hold;
    setTimeout(blank, 2000);
}

function checked() {
    var ref = document.getElementById("name").value;
    var img = document.getElementById("img");
    var doc = document.getElementById("note");
    var name;
    if (ref == names[0]) {
        name = "John";
    } else if (ref == names[1]) {
        name = "Natalie";
    } else if (ref == names[2]) {
        name = "Lillian";
    }
    img.src = "https://media0.giphy.com/media/JT7Td5xRqkvHQvTdEu/200w.gif?cid=6c09b952i531k6nm3bwo525sj1zhmai0wu0l6mlbhbfone62&ep=v1_gifs_search&rid=200w.gif&ct=g";
    doc.innerHTML = "Unfortunately " + name + ", you've already checked-in";
    setTimeout(exblank, 4000);
}

function ex() {
    var obj = document.getElementById("name").value;
    var img = document.getElementById("img");
    var doc = document.getElementById("note");
    img.src = "https://media0.giphy.com/media/JT7Td5xRqkvHQvTdEu/200w.gif?cid=6c09b952i531k6nm3bwo525sj1zhmai0wu0l6mlbhbfone62&ep=v1_gifs_search&rid=200w.gif&ct=g";
    if (obj == "" || obj == "NaN" || obj == null) {
        doc.innerHTML = "Please enter your name!";
    } else if (obj != refnames[0] && obj != refnames[1] && obj != refnames[2]) {
        doc.innerHTML = "Unfortunately you're not on the guest list!";
    }
    setTimeout(exblank, 4000);
}

function exblank() {
    var img = document.getElementById("img");
    var doc = document.getElementById("note");
    var obj = document.getElementById("name");
    obj.value = "";
    obj.removeAttribute("readonly");
    img.src = "";
    doc.innerHTML = "";
}

function blank() {
    var img = document.getElementById("img");
    var doc = document.getElementById("note");
    var obj = document.getElementById("name");
    obj.value = "";
    obj.removeAttribute("readonly");
    img.src = "";
    doc.innerHTML = "";
    x--;
    var obj = document.getElementById("txt");
    if (x > 0 && x < 5) {
        obj.innerHTML = "Waiting on " + x + " more people to check in.";
    } else if (x == 0) {
        obj.innerHTML = "Everyone is here! Enjoy the show!";
        yn = "y";
    }
}

function fade() {
    var obj = document.getElementById("container");
    obj.style.animation = "fade_out 2s linear forwards";
}

function vid() {
    var obj = document.getElementById("container");
    obj.style.visbility = "hidden";
    obj.style.display = "none";
    var vid = document.getElementById("vid");
    vid.style.visibility = "visible";
    vid.style.display = "inline-block";
    var body = document.getElementById("body");
    body.style.overflow = "hidden";
    setTimeout(lolita, 228000);
}

function lolita() {
    var obj = document.getElementById("vid");
    obj.src = "https://www.youtube.com/embed/CnIfpj0FRNI?si=5ACjBEoU8t2fpTCH";
}

$(document).ready(function() {
    $("#button").click(function() {
        var obj = document.getElementById("name").value;
        var inp = document.getElementById("name");
        inp.setAttribute("readonly", "true");
        var img = document.getElementById("img");
        img.src = "https://i.gifer.com/ZKZg.gif";
        if (obj == refnames[0] || obj == refnames[1] || obj == refnames[2]) {
            var index = refnames.indexOf(obj);
            if (names[index] == "checked") {
                setTimeout(checked, 5000);
            } else if (names[index] != "checked") {
                setTimeout(check, 5000);
            } else {
                throw new Error("Uh oh! Something went wrong!");
            }
        } else if (obj == "" || obj == "NaN" || obj == null) {
            setTimeout(ex, 5000);
        } else if (obj != refnames[0] && obj != refnames[1] && obj != refnames[2]) {
            setTimeout(ex, 5000);
        }
    });
    $("#container").click(function() {
        if (x == 0 && yn == "y") {
            fade();
            setTimeout(vid, 2500);
        } else if (x != 0 && yn == "y") {
            alert("Not everyone is here yet!");
        }
    });
});