let valMemStored = "";

let num = ""

let ele = ""

function save() {
    valMemStored = calc.workspace.value;
    document.getElementById("memhist").value = valMemStored;
    calc.workspace.value = "";
}

function recall() {
    calc.workspace.value += valMemStored;
    document.getElementById("memhist").value = "";
}

function flip() {
    if (calc.workspace.value.charAt(0) != "-") {
        calc.workspace.value = "-" + calc.workspace.value;
    }

    else {
        calc.workspace.value = calc.workspace.value.slice(1);
    }
}

function calcu() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(eval(calc.workspace.value) * 1000) / 1000;
        calc.workspace.value = Math.round(eval(calc.workspace.value) * 1000) / 1000;
        document.getElementById("calchist").value += num + "\u2248" + ele + "\n";
    }
}

function mysin() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.sin(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.sin(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        document.getElementById("calchist").value += "sin(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mysinh() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.sinh(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.sinh(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        document.getElementById("calchist").value += "sinh(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mycos() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.cos(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.cos(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        document.getElementById("calchist").value += "cos(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mycosh() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.cosh(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.cosh(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        document.getElementById("calchist").value += "cosh(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mytan() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.tan(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.tan(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        document.getElementById("calchist").value += "tan(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mytanh() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.tanh(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.tanh(eval(calc.workspace.value) * Math.PI / 180) * 1000) / 1000;
        document.getElementById("calchist").value += "tanh(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function myln() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.log(eval(calc.workspace.value)) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.log(eval(calc.workspace.value)) * 1000) / 1000;
        document.getElementById("calchist").value += "ln(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mysquare() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(eval(eval(calc.workspace.value) * eval(calc.workspace.value)) * 1000) / 1000;
        calc.workspace.value = Math.round(eval(eval(calc.workspace.value) * eval(calc.workspace.value)) * 1000) / 1000;
        document.getElementById("calchist").value += "(" + num + ")" + "\u00B2" + "\u2248" + ele + "\n";
    }
}

function mysqrt() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.sqrt(eval(calc.workspace.value)) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.sqrt(eval(calc.workspace.value)) * 1000) / 1000
        document.getElementById("calchist").value += "\u221A" + "(" + num + ")" + "\u2248" + ele + "\n";
    }
}

function mylog() {
    num = document.getElementById("workspace").value;
    if (num == "") {
        calc.workspace.value = "";
    }

    else {
        ele = Math.round(Math.log10(eval(calc.workspace.value)) * 1000) / 1000;
        calc.workspace.value = Math.round(Math.log10(eval(calc.workspace.value)) * 1000) / 1000;
        document.getElementById("calchist").value += "log\u2081\u2080(" + num + ")" + "\u2248" + ele + "\n";
    }
}