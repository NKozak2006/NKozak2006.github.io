function success() {
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

function setup() {
  document.getElementById("f1").value = "Gazebo";
  document.getElementById("f2").value = 5;
  document.getElementById("f3").value = "Dark Room";
}

var i = 0;
var txt = "Guess that wasn't it either. Well, might as well go sit for a second, maybe inside though. Go to the room people first see when walking in."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}