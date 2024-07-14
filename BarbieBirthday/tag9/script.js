function enter() {
  if (document.getElementById("text").value.toLowerCase() == "dunkin" || document.getElementById("text").value.toLowerCase() == "this phrase may confuse you") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
  }
}

function setup() {
  document.getElementById("f1").value = "Workout Equipment";
  document.getElementById("f2").value = 9;
  document.getElementById("f3").value = "Answer to #6";
}

function success() {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("container").style.display = "none";
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

var i = 0;
var txt = "Oh! Sorry to ask you this...but I think I need to go to the bathroom now..."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

function hint() {
document.getElementById("enter").innerHTML = "Caesar Cipher";
}