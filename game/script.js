var wins;

function win() {
    if (getQueryVariable("wins") == -1) {
        document.getElementById("wins").value = 1;
        wins = 1;
    } else {
        wins = parseInt(getQueryVariable("wins")) + 1;
        document.getElementById("wins").value = wins;
    }
    document.getElementById("text").innerHTML = "You found the bot! You have a total of: " + wins + " wins. Would you like to play again?";
    document.getElementById("res").style.left = "50%";
}

function getQueryVariable(variable)
{ 
    var query = window.location.search.substring(1); 
    var vars = query.split("&"); 
    for (var i=0;i<vars.length;i++)
    { 
        var pair = vars[i].split("="); 
        if (pair[0] == variable)
        { 
        return pair[1]; 
        } 
    }
    return -1;
}

function time1() {
    document.title = "..";
    setTimeout(time2, 500);
}
function time2() {
    document.title = "...";
    setTimeout(time3, 500);
}
function time3() {
    document.title = ".";
    setTimeout(time1, 500);
}

function checkIDs(bot, o1, o2, o3,y) {
    if (bot == o1 || bot == o2 || bot == o3 || bot == y) {
        return false;
    } else {
        return true;
    }
}

function begin() {
    document.getElementById("cont").style.top = "-50%";
    document.getElementById("instructions").style.top = "150%";
}

function inst() {
    document.getElementById("cont").style.top = "-50%";
    document.getElementById("instructions").style.top = "50%";
}

function begin2() {
    document.getElementById("instructions").style.top = "150%";
}

$(document).ready(function (){
    var id = 0;
    var row1, row2, row3, column1, column2, column3, row, column, rowno, columnno, botr, botc, old1, old2, old3, bot, botrint, botcint, nbot;
    $("html").on("keydown", function(e) {
        if (document.getElementById("cont").style.top == "-50%" && document.getElementById("instructions").style.top == "150%" && document.getElementById("res").style.left != "50%") {
            if (e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d") {
                var y = 0;
                var move = Math.floor((Math.random() * 4) + 1);
                if (typeof document.getElementsByClassName("old3 bot")[0] !== "undefined") {
                    bot = document.getElementsByClassName("old3 bot")[0].id;
                    z = 3;
                } else if (typeof document.getElementsByClassName("old2 bot")[0] !== "undefined") {
                    bot = document.getElementsByClassName("old2 bot")[0].id;
                    z = 2;
                } else if (typeof document.getElementsByClassName("old1 bot")[0] !== "undefined") {
                    bot = document.getElementsByClassName("old1 bot")[0].id;
                    z = 1;
                } else if (typeof document.getElementsByClassName("bot")[0] !== "undefined") {
                    bot = document.getElementsByClassName("bot")[0].id;
                    z = 0;
                }
                botr = bot.charAt(0);
                botc = bot.charAt(1);
                while (y == 0) {
                    if (move == 1) {
                        botr++;
                        if (botr < 6) {
                            y = 1;
                        }
                    } else if (move == 2) {
                        botr--;
                        if (botr > 0) {
                            y = 1;
                        }
                    } else if (move == 3) {
                        botc++;
                        if (botc < 6) {
                            y = 1;
                        }
                    } else if (move == 4) {
                        botc--;
                        if (botc > 0) {
                            y = 1;
                        }
                    }
                    if (y == 0) {
                        if (move == 1) {
                            botr--;
                        }
                        if (move == 2) {
                            botr++;
                        }
                        if (move == 3) {
                            botc--
                        }
                        if (move == 4) {
                            botc++;
                        }
                        move = Math.floor((Math.random() * 4) + 1);
                    }
                }
                e.preventDefault();
                var x = 0;
                id = document.getElementsByClassName("yes")[0].id;
                row = id.charAt(0);
                column = id.charAt(1);
                rowno = row1;
                columnno = column1;
                row1 = row2;
                column1 = column2;
                row2 = row3;
                column2 = column3;
                column3 = column;
                row3 = row;
                if (e.key == "w") {
                    if (row !== "1") {
                        row--;
                        x = 1;
                    }
                } else if (e.key == "a") {
                    if (column !== "1") {
                        column--;
                        x = 1;
                    }
                } else if (e.key == "s") {
                    if (row !== "5") {
                        row++;
                        x = 1;
                    }
                } else if (e.key == "d") {
                    if (column !== "5") {
                        column++;
                        x = 1;
                    }
                }
                if (x == 1) {
                    nbot = botr.toString() + botc.toString();
                    if (typeof document.getElementsByClassName("old1")[0] !== "undefined") {
                        document.getElementsByClassName("old1")[0].className = "not";
                    }
                    if (typeof document.getElementsByClassName("old2")[0] !== "undefined") {
                        document.getElementsByClassName("old2")[0].className = "old1";
                    }
                    if (typeof document.getElementsByClassName("old3")[0] !== "undefined") {
                        document.getElementsByClassName("old3")[0].className = "old2";
                    }
                    if (typeof document.getElementsByClassName("yes")[0] !== "undefined") {
                        document.getElementsByClassName("yes")[0].className = "old3";
                    }
                    document.getElementById(row + column).className = "yes";
                    if (typeof document.getElementsByClassName("old1")[0] !== "undefined") {
                        old1 = document.getElementsByClassName("old1")[0].id;
                    }
                    if (typeof document.getElementsByClassName("old2")[0] !== "undefined") {
                        old2 = document.getElementsByClassName("old2")[0].id;
                    }
                    if (typeof document.getElementsByClassName("old3")[0] !== "undefined") {
                        old3 = document.getElementsByClassName("old3")[0].id;
                    }
                    var yes = document.getElementsByClassName("yes")[0].id
                    if (checkIDs(nbot, old1, old2, old3, yes)) {
                        document.getElementById(nbot).className = "not bot";
                    } else if (checkIDs(nbot, old1, old2, old3, yes) == false) {
                        if (nbot == old1) {
                            document.getElementById(old1).className = "old1 bot";
                        } else if (nbot == old2) {
                            document.getElementById(old2).className = "old2 bot";
                        } else if (nbot == old3) {
                            document.getElementById(old3).className = "old3 bot";
                        } else if (nbot == yes) {
                            win();
                            return;
                        }
                    }
                    document.getElementById(bot).className = "not";
                }
            }
        }
    });

});