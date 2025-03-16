function changing() {
    var name = document.getElementById("name").value;
    if (name.toLowerCase() == "leithan") {
        document.getElementById("form").style.display = "none";
        document.getElementById("form").style.visibility = "hidden";
        var obj = document.getElementById("intro");
        obj.innerHTML += '<span id="space">  </span><span id="l_6">L</span><span id="l_7">e</span><span id="l_8">i</span><span id="l_9">t</span><span id="l_10">h</span><span id="l_11">a</span><span id="l_12">n</span>';
        setTimeout(secondSet, 2000);
    } else {
        alert("HEY! YOU AREN'T WHO THIS PAGE IS FOR! YOU'RE AN IMPOSTER! LEAVE!");
    }
}

function secondSet() {
    document.getElementById("text").style.animation = "scaling 3s ease infinite normal";
    document.getElementById("love").style.opacity = "1";
}