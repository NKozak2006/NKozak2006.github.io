function run() {
    for(let i = 0; i <= 99; i++) {
        var target = document.getElementById("slot" + i);
        target.click();
    }
}
run();

function run() {
    for(let b = 0; b<15; b++) {
        for (let c = 0; c < 4; c++) {
            var target = document.getElementById("cc" + c + "b" + b);
            target.click();
        }
    }
}
run();

function run() {
    for(let i = 0; i < 15; i++) {
        var array = document.getElementsByClassName("nameactive");
        var trans = array[0];
        var con = trans.innerHTML;
        var obj = con.replace(/\D/g,'');
        var num = Number(obj) - 1;
        var target = document.getElementById("a" + num);
        target.click();
    }
}
run();

function run() {
    for(let i = 0; i < 99; i++) {
        var con = document.getElementById("currgamename").innerHTML;
        var num = Number(con) - 1;
        var target = document.getElementById("a" + i);
        target.click();
    }
}
run();

function run() {
    for(let i = 1; i < 70; i++) {
        var sav = i.toString();
        if (i != 7 && i%7 != 0 && sav.includes('7') != true) {
            i--;
            var target = document.getElementById("slot" + i);
            target.click();
        }
    }
}
run();