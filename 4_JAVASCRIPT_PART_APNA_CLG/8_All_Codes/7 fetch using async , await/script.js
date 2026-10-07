let body = document.querySelector("body");

let url = "https://catfact.ninja/facts";

async function GetResponse() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        let random1 = Math.floor(Math.random() * data.data.length);
        let random2 = Math.floor(Math.random() * data.data.length);

        let h3 = document.createElement("h3");
        h3.innerText = data.data[random1].fact;
        body.append(h3);

        let h4 = document.createElement("h3");
        h4.innerText = data.data[random2].fact;
        body.append(h4);

       console.log("Bye");

    } catch (err) {
        console.log(err);
    }
}

GetResponse();