function enter() {
  if (document.getElementById("text").value.toLowerCase() == "adele" || document.getElementById("text").value.toLowerCase() == "squirrels.") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
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
var txt = "Welp, guess that wasn't the last one either. Wow, how long is this? Guess only Nathan knows. Anyways, you next tag is normally full of smoke."; /* The text */
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

function checkCode(num) {
  if (num == 3487) {
      location.href = "../tag7/tag.html";
  } else {
      alert("That is incorrect!");
  }
}