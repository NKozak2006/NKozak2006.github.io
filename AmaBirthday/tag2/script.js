function enter() {
    if (document.getElementById("text").value.toLowerCase() == "diamonds") {
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
var txt = "Maybe you can try going to the bathroom next. The only question is...is it upstairs or downstairs?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("res").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function checkCode(num) {
  if (num == 4562) {
      location.href = "../tag3/tag.html";
  } else {
      alert("That is incorrect!");
  }
}