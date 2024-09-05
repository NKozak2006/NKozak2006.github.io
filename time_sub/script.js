function ret() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    if (m < 10) {
        m = "0" + m.toString();
    }
    var d = date.getDate();
    if (d < 10) {
        d = "0" + d.toString();
    }
    var h = date.getHours();
    if (h < 10) {
        h = "0" + h.toString();
    }
    if (h > 12) {
        h = h - 12;
    }
    var mi = date.getMinutes();
    if (mi < 10) {
        mi = "0" + mi.toString();
    } 
    var s = date.getSeconds();
    if (s < 10) {
        s = "0" + s.toString();
    }
    document.getElementById("in-p").value = y + "," + m + "," + d + "," + h + "," + mi + "," + s;
    document.getElementById("in-form").submit();
}

function leave() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    if (m < 10) {
        m = "0" + m.toString();
    }
    var d = date.getDate();
    if (d < 10) {
        d = "0" + d.toString();
    }
    var h = date.getHours();
    if (h > 12) {
        h = h - 12;
    }
    if (h < 10) {
        h = "0" + h.toString();
    }
    var mi = date.getMinutes();
    if (mi < 10) {
        mi = "0" + mi.toString();
    } 
    var s = date.getSeconds();
    if (s < 10) {
        s = "0" + s.toString();
    }
    document.getElementById("out-p").value = y + "," + m + "," + d + "," + h + "," + mi + "," + s;
    document.getElementById("out-form").submit();
}