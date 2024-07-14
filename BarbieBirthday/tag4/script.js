function enter() {
  if (document.getElementById("text").value.toLowerCase() == "this phrase may confuse you." || document.getElementById("text").value.toLowerCase() == "this phrase may confuse you") {
      success();
  } else {
      alert("That is incorrect! Please try again!");
      y = 0;
      document.getElementById("text").value = "";
  }
}

function setup() {
  document.getElementById("f1").value = "Isaiah's Room";
  document.getElementById("f2").value = 4;
  document.getElementById("f3").value = "Caesar Cypher";
}

function success() {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("container").style.display = "none";
  document.getElementById("cont").style.visibility = "visible";
  document.getElementById("cont").style.display = "block";
  typeWriter();
}

var i = 0;
var txt = "Wow, you hopefully found that one fairly quickly, but I digress. You next tag can be found where you can brew a cup of coffee."; /* The text */
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