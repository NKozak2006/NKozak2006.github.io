function enter() {
  if (document.getElementById("text").value.toLowerCase() == "dunkin" || document.getElementById("text").value.toLowerCase() == "squirrels.") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
  }
}

function setup() {
  document.getElementById("f1").value = "Family Room";
  document.getElementById("f2").value = 6;
  document.getElementById("f3").value = "Word Scramble";
}

function success() {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("container").style.display = "none";
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

var i = 0;
var txt = "Welp, guess that wasn't the last one either. Wow, how long is this? Guess only Nathan knows. Anyways, you next tag is upstairs, the only question is where?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

function hint() {
document.getElementById("enter").innerHTML = "Word Scramble";
}