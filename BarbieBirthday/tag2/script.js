function enter() {
    if (document.getElementById("text").value.toLowerCase() == "smells like teen spirit") {
        success();
    } else {
        alert("That is incorrect! Please try again!");
        y = 0;
        document.getElementById("text").value = "";
    }
}

function setup() {
  document.getElementById("f1").value = "Front Room";
  document.getElementById("f2").value = 2;
  document.getElementById("f3").value = "Emoji Cypher";
}

function success() {
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("container").style.display = "none";
    document.getElementById("cont").style.visibility = "visible";
    document.getElementById("cont").style.display = "block";
    typeWriter();
}

var i = 0;
var txt = "Maybe you can try going to the bathroom next. The only question is...is it upstairs or downstairs?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("res").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}