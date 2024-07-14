var a1 = 0,
a2 = 0,
a3 = 0,
a4 = 0,
a5 = 0,
a6 = 0;

function setup() {
    document.getElementById("f1").value = "Dining Room";
    document.getElementById("f2").value = 8;
    document.getElementById("f3").value = "Switches";
}

function success() {
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("container").style.display = "none";
    document.getElementById("cont").style.visibility = "visible";
    document.getElementById("cont").style.display = "block";
    typeWriter();
}

var i = 0;
var txt = "Well, I don't know about you but I'm stuffed. We should probably go burn off these calories."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("res").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function check() {
    if (a1 == 0 && a2 == 1 && a3 == 1 && a4 == 1 && a5 == 0 && a6 == 0) {
        success();
    } else {
        return;
    }
}

function s1() {
    var obj = document.getElementById("l1");
    if (a1 == 0) {
        a1 = 1;
        obj.src = "on.png";
    } else {
        a1 = 0;
        obj.src = "off.png";
    }
    check();
}

function s2() {
  var obj = document.getElementById("l2");
  if (a2 == 0) {
      a2 = 1;
      obj.src = "on.png";
  } else {
      a2 = 0;
      obj.src = "off.png";
  }
  check();
}

function s3() {
  var obj = document.getElementById("l3");
  if (a3 == 0) {
      a3 = 1;
      obj.src = "on.png";
  } else {
      a3 = 0;
      obj.src = "off.png";
  }
  check();
}

function s4() {
  var obj = document.getElementById("l4");
  if (a4 == 0) {
      a4 = 1;
      obj.src = "on.png";
  } else {
      a4 = 0;
      obj.src = "off.png";
  }
  check();
}

function s5() {
  var obj = document.getElementById("l5");
  if (a5 == 0) {
      a5 = 1;
      obj.src = "on.png";
  } else {
      a5 = 0;
      obj.src = "off.png";
  }
  check();
}

function s6() {
  var obj = document.getElementById("l6");
  if (a6 == 0) {
      a6 = 1;
      obj.src = "on.png";
  } else {
      a6 = 0;
      obj.src = "off.png";
  }
  check();
}