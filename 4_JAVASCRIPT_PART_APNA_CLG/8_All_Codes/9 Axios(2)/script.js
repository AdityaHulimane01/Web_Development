
let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click", async () => {
    let link = await GetResponse();
    img.setAttribute("src", link);
});

async function GetResponse() {
    try {
      let Response = await axios.get(url)
      return Response.data.message;
    } catch (err) {
        console.log(err);
        console.log("No Image Found");
    }
}
