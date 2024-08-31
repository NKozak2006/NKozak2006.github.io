function success() {
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

var i = 0;
var txt = "I have a feeling you're getting closer, how about this time you go relax and watch some TV?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("res").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

function checkCode(num) {
  if (num == 7281) {
      location.href = "../tag6/tag.html";
  } else {
      alert("That is incorrect!");
  }
}