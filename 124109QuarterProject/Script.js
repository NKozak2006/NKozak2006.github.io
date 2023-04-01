var o;
var r;
var s;
var t;
var u;
var v;
function money1m() {
    document.getElementById("total").innerHTML = "Subtotal: $19.99";
    o = 19.99;
    s = new Date();
    r = s.getMonth() + 2;
    t = s.getDate();
    v = s.getFullYear();
    if (r==13) {
        r = 1;
    }
    u = r + "/" + t + "/" + v;
}

function money3m() {
    document.getElementById("total").innerHTML = "Subtotal: $44.97";
    o = 44.97;
    s = new Date();
    r = s.getMonth() + 4;
    t = s.getDate();
    v = s.getFullYear();
    if (r==13) {
        r = 1;
    }
    else if (r==14) {
        r = 2;
    }
    else if (r==15) {
        r = 3;
    }
    u = r + "/" + t + "/" + v;
}

function money1y() {
    document.getElementById("total").innerHTML = "Subtotal: $155.88";
    o = 155.88;
    s = new Date();
    r = s.getMonth() + 1;
    t = s.getDate();
    v = s.getFullYear() + 1;
    u = r + "/" + t + "/" + v;
}

function money3y() {
    document.getElementById("total").innerHTML = "Subtotal: $359.64";
    o = 359.64;
    s = new Date();
    r = s.getMonth() + 1;
    t = s.getDate();
    v = s.getFullYear() + 3;
    u = r + "/" + t + "/" + v;
}

function randimg() {
    var img = ["Gay", "Lesbian", "Bisexual", "Pansexual", "Asexual", "Aromantic", "Non-Binary", "Demigender", "Demisexual", "Polyamorous"];
    var sel = document.getElementsByName("qu");
    var a = Math.floor(Math.random() * 9);
    var b = 0;
    var h = 10;
    while (b < a) {
        var c = Math.floor(Math.random() * h);
        var d = img[c];
        var m = sel[c].id;
        document.getElementById(m).disabled = true;
        var e = d + "NaN.png";
        document.getElementById(d).src = e;
        document.getElementById(d).name = "false";
        img.splice(c, 0);
        b++;
        h = h - 1;
    }
}

function chan() {
    var l = document.getElementsByName("true");
    var i = 0;
    var j = l.length;
    while (i < j) {
        var k = l[i].id;
        document.getElementById(k).src = k + ".png";
        i++;
    }
    var f = document.getElementById("license").value;
    var g = f + "Sel.png";
    document.getElementById(f).src = g;
}

function main() {
    var p = (o/100)*10;
    var q = o + p;
    p = p.toFixed(2);
    q = q.toFixed(2);
    var m = document.getElementById("license");
    var n = m.options[m.selectedIndex].value;
    document.getElementById(n).src = n + "NaN.png";
    document.getElementById(n).name = "false";
    var w = n.toLowerCase();
    document.getElementById(w).disabled = true;
    document.getElementById("invoice").style = "animation: invoicein; animation-duration: 2s; animation-direction: normal; animation-iteration-count: 1; animation-timing-function: ease-out; top: 50%;";
    document.getElementById("inv").innerHTML = "Name: " + document.getElementById("first").value + " " + document.getElementById("last").value + "</br>Chosen License: " + document.getElementById("license").value + "</br>Email: " + document.getElementById("mail").value + "</br>Phone Number: " + document.getElementById("phone").value + "</br>Card Number: " + document.getElementById("carnum").value + "</br>Expiration: " + document.getElementById("exp").value + "</br>CVV/CVC: " + document.getElementById("cvv").value + "</br>Subtotal: " + o + "</br>Tax(10%): " + p + "</br>Total: " + q + "</br>Expiration Date: " + u;
    document.getElementById("license").value = "";
}

function cpy() {
    var copy = document.getElementById("inv").innerText;
    navigator.clipboard.writeText(copy);
    alert("Invoice has been copied to clipboard!");
    document.getElementById("invoice").style = "animation: invoiceout; animation-duration: 2s; animation-direction: normal; animation-iteration-count: 1; animation-timing-function: ease-out; top: -50%;";
}

$(document).ready(function(){
    $("input").on ({
        focus: function() {
            $(this).css("background-color", "#4cc9f0");
            $(this).css("border-color", "#b5179e");
            $(this).val("");
        },
        blur: function() {
            $(this).css("background-color", "#b5179e");
            $(this).css("border-color", "#4cc9f0");
        }
    });
    $("select").on ({
        focus: function() {
            $(this).css("background-color", "#4cc9f0");
            $(this).css("border-color", "#b5179e");
        },
        blur: function() {
            $(this).css("background-color", "#b5179e");
            $(this).css("border-color", "#4cc9f0");
        }
    });
    $("form").submit ( function(){
        main();
        return false;
    });
});