function enter() {
  if (document.getElementById("text").value.toLowerCase() == "squirrels" || document.getElementById("text").value.toLowerCase() == "squirrels.") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
  }
}

function setup() {
  document.getElementById("f1").value = "Front Room";
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
var txt = "Well, it seems like a wild goose chase. Might as well go take a break and play a game. A video game that is. Go to the room with most of the video games."; /* The text */
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