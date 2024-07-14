function enter() {
  if (document.getElementById("text").value.toLowerCase() == "-3" || document.getElementById("text").value.toLowerCase() == "(-3)") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
  }
}

function setup() {
  document.getElementById("f1").value = "Downstairs Bathroom";
  document.getElementById("f2").value = 10;
  document.getElementById("f3").value = "PEMDAS";
}

function success() {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("container").style.display = "none";
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

var i = 0;
var txt = "Alright alright, after all of that there's no way to keep it from you, you need to go to the crawlspace."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

function hint() {
document.getElementById("enter").innerHTML = "PEMDAS";
}