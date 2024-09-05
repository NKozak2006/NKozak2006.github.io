function load() {
    var h, m, in_t, out_t, int, outt;
    fetch("https://ndkz.app.n8n.cloud/webhook/bbcd9487-54f9-449d-8246-49f3f61f44fc")
    .then(response => response.text())
    .then(html => {
        h = html;
        int = JSON.parse(h);
        fetch("https://ndkz.app.n8n.cloud/webhook/36fd0208-05f2-4649-a66d-46dd0c475d22")
        .then(resp => resp.text())
        .then(hml => {
            m = hml;
            outt = JSON.parse(m);
            var in_len = int.length;
            var out_len = outt.length;
            var i = 0;
            var j = 0;
            var obj = document.getElementById("time");
            var in_arr, out_arr;
            var in_str, out_str;
            while (i < in_len && j < out_len) {
                in_arr = int[i].In.split(",");
                in_str = in_arr[1] + "/" + in_arr[2] + "/" + in_arr[0] + " " + in_arr[3] + ":" + in_arr[4] + ":" + in_arr[5];
                out_arr = outt[j].Out.split(",");
                out_str = out_arr[1] + "/" + out_arr[2] + "/" + out_arr[0] + " " + out_arr[3] + ":" + out_arr[4] + ":" + out_arr[5];
                obj.innerHTML += "<tr><td>" + in_str + "</td><td>" + out_str + "</td></tr>";
                i++;
                j++;
            }
            while (i < in_len) {
                in_arr = int[i].In.split(",");
                in_str = in_arr[1] + "/" + in_arr[2] + "/" + in_arr[0] + " " + in_arr[3] + ":" + in_arr[4] + ":" + in_arr[5];
                obj.innerHTML += "<tr><td>" + in_str + "</td><td></td></tr>";
                i++;
            }
            while (j < out_len) {
                out_arr = outt[j].Out.split(",");
                out_str = out_arr[1] + "/" + out_arr[2] + "/" + out_arr[0] + " " + out_arr[3] + ":" + out_arr[4] + ":" + out_arr[5];
                obj.innerHTML += "<tr><td></td><td>" + out_str + "</td></tr>";
                j++;
            }
        });
    });

}