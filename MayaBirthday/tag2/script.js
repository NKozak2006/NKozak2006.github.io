function enter() {
    if (document.getElementById("text").value.toLowerCase() == "summertime sadness") {
        success();
    } else {
        alert("That is incorrect! Please try again!");
        y = 0;
        document.getElementById("text").value = "";
    }
}

function setup() {
  document.getElementById("f1").value = "Kitchen Table";
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
var txt = "Hm, maybe you'll find your present soon. But first, a workout. Go to the place to workout"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("res").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}