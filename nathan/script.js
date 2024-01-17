var x = 0;

function titlechange() {
    if (x == 0) {
        document.title = "-Who Knows Nathan?-";
        x = 1;
    } else if (x == 1) {
        document.title = "‾Who Knows Nathan?‾";
        x = 2;
    } else if (x == 2) {
        document.title = "-Who Knows Nathan?-";
        x = 3;
    } else if (x == 3) {
        document.title = "_Who Knows Nathan?_";
        x = 0;
    }
}

function getCookie(cookieName) {
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        let [name, value] = cookie.split("=");
        
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}

function tryinghere() {
    let username = getCookie("user");
    alert(username);
}