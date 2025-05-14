function loaded() {
    const url = 'https://kozakn.app.n8n.cloud/webhook/08569699-fea2-4856-80aa-fe878ab9dd4f';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Data received:', data);
        const words = data;
        document.getElementById("output").innerHTML = "";
        for (var i = 0; i < words.length; i++) {
            if (i == 0) {
                document.getElementById("output").innerHTML += words[i].Word;
            } else {
                document.getElementById("output").innerHTML += "&emsp;&emsp;" + words[i].Word;
            }
        }
    })
}