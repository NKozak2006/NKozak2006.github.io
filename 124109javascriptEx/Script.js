let r = 0;
let s = 1;

function myonload() {
    let text;
    let person = prompt("Please enter your name:", "");
    document.getElementById("colors").innerHTML = "Background Color: Purple\nFont Color: Pink";
    if (person == null) {
        document.write("User cancelled request. Please refresh and try again.");
    }

    else if (person == "") {
        document.write("Enter a valid name. Please refresh and try again.")
    }

    else {
        text = "Welcome, " + person + ", to my website! Please have a look around!";
        document.getElementById("welcome").innerHTML = text;
    }
}

function purple() {
    let x = document.getElementsByTagName("BODY")[0];
    x.style.color = "pink";
    x.style.background = "linear-gradient(-45deg, #8026ff, #af26ff, #db26ff, #f126ff)";
    x.style.backgroundSize = "500% 500%";
    x.style.height = "35vh";
    document.getElementById("colors").innerHTML = "Background Color: Purple\nFont Color: Pink";
    let y = document.getElementById("colors");
    y.style.color = "pink";
    y.style.borderColor = "pink";
    let z = document.getElementById("imagebutton");
    z.style.color = "pink";
    z.style.borderColor = "pink";
    z.style.background = "linear-gradient(-45deg, #f126ff, #db26ff, #af26ff, #8026ff)";
    z.style.backgroundSize = "500% 500%";
    r = 0;
    s = 1;
    document.getElementById("imagefile").src = "PurpleFlower.png";
    document.getElementById("favicon").href = "PurpleWorld.png";
}

function red() {
    let x = document.getElementsByTagName("BODY")[0];
    x.style.color = "yellow";
    x.style.background = "linear-gradient(-45deg, #eb3461, #eb344c, #eb3434, #eb4634)";
    x.style.backgroundSize = "500% 500%";
    x.style.height = "35vh";
    document.getElementById("colors").innerHTML = "Background Color: Red\nFont Color: Yellow";
    let y = document.getElementById("colors");
    y.style.color = "yellow";
    y.style.borderColor = "yellow";
    let z = document.getElementById("imagebutton");
    z.style.color = "yellow";
    z.style.borderColor = "yellow";
    z.style.background = "linear-gradient(-45deg, #eb4634, #eb3434, #eb344c, #eb3461)";
    z.style.backgroundSize = "500% 500%";
    r = 1;
    s = 1;
    document.getElementById("imagefile").src = "RedSpiderlillies.png";
    document.getElementById("favicon").href = "RedWorld.png";
}

function green() {
    let x = document.getElementsByTagName("BODY")[0];
    x.style.color="white";
    x.style.background = "linear-gradient(-45deg, #126601, #178c00, #21bf02, #2cff03)";
    x.style.backgroundSize = "500% 500%";
    x.style.height = "35vh";
    document.getElementById("colors").innerHTML = "Background Color: Green\nFont Color: White";
    let y = document.getElementById("colors");
    y.style.color = "white";
    y.style.borderColor = "white";
    let z = document.getElementById("imagebutton");
    z.style.color = "white";
    z.style.borderColor = "white";
    z.style.background = "linear-gradient(-45deg, #2cff03, #21bf02, #178c00, #126601)";
    z.style.backgroundSize = "500% 500%";
    r = 2;
    s = 1;
    document.getElementById("imagefile").src = "GreenLunamoth.png";
    document.getElementById("favicon").href = "GreenWorld.png";
}

function blue() {
    let x = document.getElementsByTagName("BODY")[0];
    x.style.color="#bdfcc4";
    x.style.background = "linear-gradient(-45deg, #70e2ff, #00cbff, #00aeff, #0099ff)";
    x.style.backgroundSize = "500% 500%";
    x.style.height = "35vh";
    document.getElementById("colors").innerHTML = "Background Color: Blue\nFont Color: Pale Green";
    let y = document.getElementById("colors");
    y.style.color = "#bdfcc4";
    y.style.borderColor = "#bdfcc4";
    let z = document.getElementById("imagebutton");
    z.style.color = "#bdfcc4";
    z.style.borderColor = "#bdfcc4";
    z.style.background = "linear-gradient(-45deg, #0099ff, #00aeff, #00cbff, #70e2ff)";
    z.style.backgroundSize = "500% 500%";
    r = 3;
    s = 1;
    document.getElementById("imagefile").src = "BlueMorpho.png";
    document.getElementById("favicon").href = "BlueWorld.png";
}

function imagecycle() {
    if (r==0) {
        if (s==0) {
            document.getElementById("imagefile").src = "PurpleFlower.png";
            s = 1;
        }

        else if (s==1) {
            document.getElementById("imagefile").src = "PurpleFeathers.png";
            s = 2;
        }

        else if (s==2) {
            document.getElementById("imagefile").src = "PurpleDewdrops.png";
            s = 3;
        }

        else if (s==3) {
            document.getElementById("imagefile").src = "PurpleAmythest.png";
            s = 0;
        }
    }

    else if (r==1) {
        if (s==0) {
            document.getElementById("imagefile").src = "RedSpiderlillies.png";
            s = 1;
        }

        else if (s==1) {
            document.getElementById("imagefile").src = "RedPoinsettias.png";
            s = 2;
        }

        else if (s==2) {
            document.getElementById("imagefile").src = "RedStrawberries.png";
            s = 3;
        }

        else if (s==3) {
            document.getElementById("imagefile").src = "RedRoses.png";
            s = 0;
        }
    }

    else if (r==2) {
        if (s==0) {
            document.getElementById("imagefile").src = "GreenLunamoth.png";
            s = 1;
        }

        else if (s==1) {
            document.getElementById("imagefile").src = "GreenFern.png";
            s = 2;
        }

        else if (s==2) {
            document.getElementById("imagefile").src = "GreenClovers.png";
            s = 3;
        }

        else if (s==3) {
            document.getElementById("imagefile").src = "GreenHeart.png";
            s = 0;
        }
    }

    else if (r==3) {
        if (s==0) {
            document.getElementById("imagefile").src = "BlueMorpho.png";
            s = 1;
        }

        else if (s==1) {
            document.getElementById("imagefile").src = "BlueFrost.png";
            s = 2;
        }

        else if (s==2) {
            document.getElementById("imagefile").src = "BlueMountains.png";
            s = 3;
        }

        else if (s==3) {
            document.getElementById("imagefile").src = "BlueBeads.png";
            s = 0;
        }
    }
}

