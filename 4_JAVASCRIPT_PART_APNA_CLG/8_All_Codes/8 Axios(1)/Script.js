
let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await GetResponse();
    let p = document.querySelector("p");
    p.innerHTML = fact;
});

async function GetResponse() {
    try {
      let Response = await axios.get(url)
      return Response.data.fact;
    } catch (err) {
        console.log(err);
        console.log("No Facts Found");
    }
}
