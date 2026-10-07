let url = "https://icanhazdadjoke.com/";

async function getJoke() {
    try{
        const config = {
            headers : { Accept : "application/json" }
        }
        let response = await axios.get(url, config)
        console.log(response.data);
    } catch (error) {   
        console.log(error);
    }
}

getJoke();
