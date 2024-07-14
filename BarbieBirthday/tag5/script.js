function success() {
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

function setup() {
  document.getElementById("f1").value = "Keurig";
  document.getElementById("f2").value = 5;
  document.getElementById("f3").value = "Dark Room";
}

var i = 0;
var txt = "I have a feeling you're getting closer, how about this time you go try to play a video game?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}