function redir() {
    var val = document.getElementById("option").value;
    if (val == "null") {
        return;
    } else if (val == "btd") {
        location.href = "./btdtpe/index.html";
    } else if (val == "ult") {
        location.href = "./ultraviolence/index.html";
    } else if (val == "hon") {
        location.href = "./honeymoon/index.html";
    } else if (val == "lfl") {
        location.href = "./lfl/index.html";
    } else if (val == "nfr") {
        location.href = "./nfr/index.html";
    } else if (val == "bb") {
        location.href = "./bb/index.html";
    } else if (val == "cotcc") {
        location.href = "./cotcc/index.html";
    } else if (val == "ob") {
        location.href = "./dykttatuob/index.html";
    } else if (val == "all") {
        location.href = "./all/index.html";
    }
}