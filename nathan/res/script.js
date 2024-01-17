function grade() {
    var lvl = getCookie("lvl");
    if (lvl == "easy") {
        var params = new URLSearchParams(location.search);
        var bday = params.get('bday');
        var bsf = params.get('bsf');
        bsf = bsf.toLocaleLowerCase();
        var sib = params.get('sib');
        var cd = params.get('cd');
        cd = cd.toLowerCase();
        var szn = params.get('szn');
        szn = szn.toLowerCase();
        var score =0;
        if (bday == atob("MjAwNi0wMy0yMg==")) {
            score += 20;
        }
        if (bsf == atob("anVuZQ==")) {
            score += 20;
        }
        if (sib == atob("Ng==")) {
            score += 20;
        }
        if (cd == atob("Y2F0cw==")) {
            score += 20;
        }
        if (szn == atob("d2ludGVy")) {
            score += 20;
        }
        return score;
    } else if (lvl == "medium") {
        var params = new URLSearchParams(location.search);
        var bday = params.get('bday');
        var bsf = params.get('bsf');
        bsf = clean(bsf);
        var sib = params.get('sib');
        var cd = params.get('cd');
        var szn = params.get('szn');
        var color = params.get('color');
        color = clean(color);
        var cat = params.get('cat');
        cat = clean(cat);
        var fear = params.get('fear');
        var luck = params.get('luck');
        var anim = params.get('anim');
        anim = clean(anim);
        var comp = params.get('comp');
        var tall = params.get('tall');
        tall = clean(tall);
        var kc = params.get('kc');
        var hc = params.get('hc');
        var score = 0;
        if (bday == atob("MjAwNi0wMy0yMg==")) {
            score += 7.142857143;
        }
        if (bsf == atob("anVuZQ==")) {
            score += 7.142857143;
        }
        if (sib == atob("Ng==")) {
            score += 7.142857143;
        }
        if (cd == atob("Y2F0cw==")) {
            score += 7.142857143;
        }
        if (szn == atob("d2ludGVy")) {
            score += 7.142857143;
        }
        if (color == atob("cHVycGxl")) {
            score += 7.142857143;
        }
        if (cat == atob("bHVja3k=")) {
            score += 7.142857143;
        }
        if (fear == atob("c3BpZGVycw==")) {
            score += 7.142857143;
        }
        if (luck == atob("MTM=")) {
            score += 7.142857143;
        }
        if (anim == atob("cmVkcGFuZGE=") || anim == atob("cmVkcGFuZGFz")) {
            score += 7.142857143;
        }
        if (comp == atob("bGFwdG9w")) {
            score += 7.142857143;
        }
        if (tall == atob("NjI=")) {
            score += 7.142857143;
        }
        if (kc == atob("a25pdA==")) {
            score += 7.142857143;
        }
        if (hc == atob("aG90")) {
            score += 7.142857143;
        }
        if (score == 100.000000002) {
            score = 100;
        }
        return score;
    } else if (lvl == "hard") {
        var params = new URLSearchParams(location.search);
        var bday = params.get('bday');
        var bsf = params.get('bsf');
        bsf = clean(bsf);
        var sib = params.get('sib');
        var cd = params.get('cd');
        var szn = params.get('szn');
        var color = params.get('color');
        color = clean(color);
        var cat = params.get('cat');
        cat = clean(cat);
        var hair = params.get('hair');
        var fear = params.get('fear');
        var luck = params.get('luck');
        var anim = params.get('anim');
        anim = clean(anim);
        var comp = params.get('comp');
        var tall = params.get('tall');
        tall = clean(tall);
        var kc = params.get('kc');
        var hc = params.get('hc');
        var conc = params.get('conc');
        conc = clean(conc);
        var alb = params.get('alb');
        var catnum = params.get('catnum');
        var hol = params.get('hol');
        hol = clean(hol);
        var work = params.get('work');
        work = clean(work);
        var inst = params.get('inst');
        var wall = params.get('wall');
        wall = clean(wall);
        var lead = params.get('lead');
        var music = params.get('music');
        music = clean(music);
        var score = 0;
        if (bday == atob("MjAwNi0wMy0yMg==")) {
            score += 4.166666667;
        }
        if (bsf == atob("anVuZQ==")) {
            score += 4.166666667;
        }
        if (sib == atob("Ng==")) {
            score += 4.166666667;
        }
        if (cd == atob("Y2F0cw==")) {
            score += 4.166666667;
        }
        if (szn == atob("d2ludGVy")) {
            score += 4.166666667;
        }
        if (color == atob("cHVycGxl")) {
            score += 4.166666667;
        }
        if (cat == atob("bHVja3k=")) {
            score += 4.166666667;
        }
        if (hair == atob("NQ==")) {
            score += 4.166666667;
        }
        if (fear == atob("c3BpZGVycw==")) {
            score += 4.166666667;
        }
        if (luck == atob("MTM=")) {
            score += 4.166666667;
        }
        if (anim == atob("cmVkcGFuZGE=") || anim == atob("cmVkcGFuZGFz")) {
            score += 4.166666667;
        }
        if (comp == atob("bGFwdG9w")) {
            score += 4.166666667;
        }
        if (tall == atob("NjI=")) {
            score += 4.166666667;
        }
        if (kc == atob("a25pdA==")) {
            score += 4.166666667;
        }
        if (hc == atob("aG90")) {
            score += 4.166666667;
        }
        if (conc = atob("YmlsbGllZWlsaXNo")) {
            score += 4.166666667;
        }
        if (alb == atob("bHVzdGZvcmxpZmU=")) {
            score += 4.166666667;
        }
        if (catnum == atob("Ng==")) {
            score += 4.166666667;
        }
        if (hol == atob("aGFsbG93ZWVu")) {
            score += 4.166666667;
        }
        if (work == atob("am9hbm5mYWJyaWNz")) {
            score += 4.166666667;
        }
        if (inst == atob("Nw==")) {
            score += 4.166666667;
        }
        if (wall == atob("eWVsbG93")) {
            score += 4.166666667;
        }
        if (lead == atob("ZW5hY3Q=")) {
            score += 4.166666667;
        }
        if (music == atob("c29sYW5nZQ==")) {
            score += 4.166666667;
        }
        if (score > 100) {
            score = 100;
        }
        return score;
    } else {
        alert("ERROR!");
    }
}

function clean(val) {
    var temp = val.replace(" ", "");
    temp = temp.replace("'", "");
    temp = temp.replace('"', '');
    temp = temp.toLowerCase();
    return temp;

}

function getCookie(cookieName) {
    var cookies = document.cookie;
    var cookieArray = cookies.split("; ");

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        var [name, value] = cookie.split("=");
        
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}

function fun() {
    setTimeout(back,1000);
}

function back() {
    document.getElementById("bd").style.backgroundColor = "black";
    setTimeout(a, 4000);
}

function a() {
    document.getElementById("txt").innerHTML += ".";
    setTimeout(b, 500);
}

function b() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(c, 500);
}

function c() {
    document.getElementById("txt").innerHTML += ".";
    setTimeout(d, 500);
}

function d() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(e, 500);
}

function e() {
    document.getElementById("txt").innerHTML += ".";
    setTimeout(f, 1500)
}

function f() {
    document.getElementById("txt").innerHTML = ". . ";
    setTimeout(g, 75);
}

function g() {
    document.getElementById("txt").innerHTML = ". .";
    setTimeout(h, 75);
}

function h() {
    document.getElementById("txt").innerHTML = ". ";
    setTimeout(i, 75);
}

function i() {
    document.getElementById("txt").innerHTML = ".";
    setTimeout(j, 75);
}

function j() {
    document.getElementById("txt").innerHTML = "";
    setTimeout(k, 1000);
}

function k() {
    document.getElementById("txt").innerHTML += "w";
    setTimeout(l, 75);
}

function l() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(m, 75);
}

function m() {
    document.getElementById("txt").innerHTML += "l";
    setTimeout(n, 75);
}

function n() {
    document.getElementById("txt").innerHTML += "l";
    setTimeout(o, 1000);
}

function o() {
    document.getElementById("txt").innerHTML += "<br>I";
    setTimeout(p, 75);
}

function p() {
    document.getElementById("txt").innerHTML += "'";
    setTimeout(q, 75);
}

function q() {
    document.getElementById("txt").innerHTML += "m";
    setTimeout(r, 75);
}

function r() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(s, 75);
}

function s() {
    document.getElementById("txt").innerHTML += "s";
    setTimeout(t, 75);
}

function t() {
    document.getElementById("txt").innerHTML += "u";
    setTimeout(u, 75);
}

function u() {
    document.getElementById("txt").innerHTML += "r";
    setTimeout(v, 75);
}

function v() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(w, 75);
}

function w() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(x, 75);
}

function x() {
    document.getElementById("txt").innerHTML += "y";
    setTimeout(y, 75);
}

function y() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(z, 75);
}

function z() {
    document.getElementById("txt").innerHTML += "u";
    setTimeout(aa, 75);
}

function aa() {
    document.getElementById("txt").innerHTML += "'";
    setTimeout(ab, 75);
}

function ab() {
    document.getElementById("txt").innerHTML += "r";
    setTimeout(ac, 75);
}

function ac() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(ad, 75);
}

function ad() {
    document.getElementById("txt").innerHTML += "<br>c";
    setTimeout(ae, 75);
}

function ae() {
    document.getElementById("txt").innerHTML += "u";
    setTimeout(af, 75);
}

function af() {
    document.getElementById("txt").innerHTML += "r";
    setTimeout(ag, 75);
}

function ag() {
    document.getElementById("txt").innerHTML += "i";
    setTimeout(ah, 75);
}

function ah() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(ai, 75);
}

function ai() {
    document.getElementById("txt").innerHTML += "u";
    setTimeout(aj, 75);
}

function aj() {
    document.getElementById("txt").innerHTML += "s";
    setTimeout(ak, 1000);
}

function ak() {
    document.getElementById("txt").style.color = "black";
    setTimeout(al, 3000);
}

function al() {
    document.getElementById("txt").style.transition = "color 0s";
    document.getElementById("txt").innerHTML = "w";
    document.getElementById("txt").style.color = "white";
    setTimeout(am, 75);
}

function am() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(an, 75);
}

function an() {
    document.getElementById("txt").innerHTML += "l";
    setTimeout(ao, 75)
}

function ao() {
    document.getElementById("txt").innerHTML += "l";
    setTimeout(ap, 75);
}

function ap() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(aq, 75);
}

function aq() {
    document.getElementById("txt").innerHTML += "a";
    setTimeout(ar, 75);
}

function ar() {
    document.getElementById("txt").innerHTML += "l";
    setTimeout(as, 75);
}

function as() {
    document.getElementById("txt").innerHTML += "l";
    setTimeout(at, 75);
}

function at() {
    document.getElementById("txt").innerHTML += "<br>i";
    setTimeout(au, 75);
}

function au() {
    document.getElementById("txt").innerHTML += "n";
    setTimeout(av, 75);
}

function av() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(aw, 75);
}

function aw() {
    document.getElementById("txt").innerHTML += "g";
    setTimeout(ax, 75);
}

function ax() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(ay, 75);
}

function ay() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(az, 75);
}

function az() {
    document.getElementById("txt").innerHTML += "d";
    setTimeout(ba, 75);
}

function ba() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(bb, 75);
}

function bb() {
    document.getElementById("txt").innerHTML += "t";
    setTimeout(bc, 75);
}

function bc() {
    document.getElementById("txt").innerHTML += "i";
    setTimeout(bd, 75);
}

function bd() {
    document.getElementById("txt").innerHTML += "m";
    setTimeout(be, 75);
}

function be() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(bf, 1500);
}

function bf() {
    document.getElementById("txt").innerHTML += "<br>o";
    setTimeout(bg, 75);
}

function bg() {
    document.getElementById("txt").innerHTML += "r";
    setTimeout(bh, 75);
}

function bh() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(bi, 75);
}

function bi() {
    document.getElementById("txt").innerHTML += "s";
    setTimeout(bj, 75);
}

function bj() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(bk, 75);
}

function bk() {
    document.getElementById("txt").innerHTML += "m";
    setTimeout(bl, 75);
}

function bl() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(bm, 75);
}

function bm() {
    document.getElementById("txt").innerHTML += "t";
    setTimeout(bn, 75);
}

function bn() {
    document.getElementById("txt").innerHTML += "h";
    setTimeout(bo, 75);
}

function bo() {
    document.getElementById("txt").innerHTML += "i";
    setTimeout(bp, 75);
}

function bp() {
    document.getElementById("txt").innerHTML += "n";
    setTimeout(bq, 75);
}

function bq() {
    document.getElementById("txt").innerHTML += "g";
    document.getElementById("txt").style.transition = "color 2s";
    setTimeout(br, 1000);
}

function br() {
    document.getElementById("txt").style.color = "black";
    setTimeout(bs, 3000);
}

function bs() {
    document.getElementById("txt").style.transition = "color 0s";
    document.getElementById("txt").innerHTML = "a";
    document.getElementById("txt").style.color = "white";
    setTimeout(bt, 75);
}

function bt() {
    document.getElementById("txt").innerHTML += "n";
    setTimeout(bu, 75);
}

function bu() {
    document.getElementById("txt").innerHTML += "y";
    setTimeout(bv, 75);
}

function bv() {
    document.getElementById("txt").innerHTML += "w";
    setTimeout(bw, 75);
}

function bw() {
    document.getElementById("txt").innerHTML += "a";
    setTimeout(bx, 75);
}

function bx() {
    document.getElementById("txt").innerHTML += "y";
    setTimeout(by, 75);
}

function by() {
    document.getElementById("txt").innerHTML += "s";
    setTimeout(bz, 1000);
}

function bz() {
    document.getElementById("txt").innerHTML += "<br>y";
    setTimeout(ca, 80);
}

function ca() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(cb, 120);
}

function cb() {
    document.getElementById("txt").innerHTML += "u";
    setTimeout(cc, 160);
}

function cc() {
    document.getElementById("txt").innerHTML += " ";
    setTimeout(cd, 200);
}

function cd() {
    document.getElementById("txt").innerHTML += "s";
    setTimeout(ce, 240);
}

function ce() {
    document.getElementById("txt").innerHTML += "c";
    setTimeout(cf, 280);
}

function cf() {
    document.getElementById("txt").innerHTML += "o";
    setTimeout(cg, 320);
}

function cg() {
    document.getElementById("txt").innerHTML += "r";
    setTimeout(ch, 360);
}

function ch() {
    document.getElementById("txt").innerHTML += "e";
    setTimeout(ci, 400);
}

function ci() {
    document.getElementById("txt").innerHTML += "d";
    setTimeout(cj, 4000);
}

function cj() {
    var scsc = grade();
    document.getElementById("txt").innerHTML += "<br>" + scsc + "%!";
    setTimeout(ck, 4000);
}

function ck() {
    alert("Or did you??????");
    setTimeout(cl, 1000);
}

function cl() {
    alert("Redirecting!");
    document.forms[0].submit();
}