var x = 0;

function t1() {
  var obj = document.getElementById("text");
  x = 1;
  obj.innerHTML = "&#9989;";
}

function t2() {
  var obj = document.getElementById("text");
  if (x == 2) {
    obj.innerHTML += "&#9989;";
    x += 1;
  } else {
    x = 0;
    obj.innerHTML = "&#10060;";
  }
}

function t3() {
  var obj = document.getElementById("text");
  if (x == 5) {
    success();
  } else {
    x = 0;
    obj.innerHTML = "&#10060;";
  }
}

function t4() {
  var obj = document.getElementById("text");
  if (x == 1) {
    obj.innerHTML += "&#9989;";
    x += 1;
  } else {
    x = 0;
    obj.innerHTML = "&#10060;";
  }
}

function t5() {
  var obj = document.getElementById("text");
  if (x == 3) {
    obj.innerHTML += "&#9989;";
    x += 1;
  } else {
    x = 0;
    obj.innerHTML = "&#10060;";
  }
}

function t6() {
  var obj = document.getElementById("text");
  if (x == 4) {
    obj.innerHTML += "&#9989;";
    x += 1;
  } else {
    x = 0;
    obj.innerHTML = "&#10060;";
  }
}

function success() {
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("container").style.display = "none";
    document.getElementById("cont").style.visibility = "visible";
    document.getElementById("cont").style.display = "block";
    typeWriter();
}

var i = 0;
var txt = "Well, you figured out which bathroom, but now can you figure out which bedroom the next one is in?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("res").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function checkCode(num) {
  if (num == 8370) {
      location.href = "../tag4/tag.html";
  } else {
      alert("That is incorrect!");
  }
}