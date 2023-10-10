function fun() {
    let params = new URLSearchParams(location.search);
    var a = params.get('name');
    var title = document.getElementById("L");
    if (a == "Lillian") {
        title.innerHTML = "Welcome<br>Lillian";
    } else if (a == "Nathan") {
        title.innerHTML = "Welcome<br>Nathan";
    } else if (a == "Natalie") {
        title.innerHTML = "Welcome<br>Natalie";
    } else if (a == "John") {
        title.innerHTML = "Welcome<br>John";
    } else if (a == "Riley") {
        title.innerHTML = "Welcome<br>Riley";
    } else {
        title.innerHTML = "Ticket<br>invalid";
    }
    title.style.display = "block";
    title.style.visibility = "visible";
    title.style.animation = "fade_in 2s linear forwards";
    setTimeout(fade, 5000);
}

function fade() {
    var title = document.getElementById("L");
    title.style.animation = "";
    title.style.animation = "fade_out 2s linear forwards";
    setTimeout(dis, 2000);
}

function dis() {
    var title = document.getElementById("L");
    title.style.display = "none";
    title.style.visibility = "hidden";
    sec();
}

function sec() {
    let params = new URLSearchParams(location.search);
    var a = params.get('name');
    var title = document.getElementById("L");
    if (a == "Lillian") {
        title.innerHTML = "Enjoy<br>the<br>show<br>Lillian";
    } else if (a == "Nathan") {
        title.innerHTML = "Enjoy<br>the<br>show<br>Nathan";
    } else if (a == "Natalie") {
        title.innerHTML = "Enjoy<br>the<br>show<br>Natalie";
    } else if (a == "John") {
        title.innerHTML = "Enjoy<br>the<br>show<br>John";
    } else if (a == "Riley") {
        title.innerHTML = "Enjoy<br>the<br>show<br>Riley";
    } else {
        title.innerHTML = "Please<br>exit<br>the<br>show";
    }
    title.style.display = "block";
    title.style.visibility = "visible";
    title.style.animation = "fade_in 2s linear forwards";
    setTimeout(fade2, 5000);
}

function fade2() {
    var title = document.getElementById("L");
    title.style.animation = "";
    title.style.animation = "fade_out 2s linear forwards";
    setTimeout(dis2, 2000);
}

function dis2() {
    var title = document.getElementById("L");
    title.style.display = "none";
    title.style.visibility = "hidden";
}