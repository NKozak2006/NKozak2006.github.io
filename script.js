function run() {
    var x;
    var y;
    for(let i = 1; i <= 100; i++) {
        var target = document.getElementById("slot" + i);
        target.click();
        // x = target.offsetLeft;
        // y = target.offsetTop;
    }
}