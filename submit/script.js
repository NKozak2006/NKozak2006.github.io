function sub() {
    var str = document.getElementById("Word").value;
    if (/\s/.test(str) == true || str == "") {
        alert("Submission must be only ONE word!");
    } else {
        if (document.getElementById("Name").value == "") {
            document.getElementById("Name").value = "Anonymous";
        }
        document.getElementById("form").submit();
    }
}