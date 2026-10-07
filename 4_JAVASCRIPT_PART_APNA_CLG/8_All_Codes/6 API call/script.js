let body = document.querySelector("body")


let url = "https://catfact.ninja/facts"

fetch(url)
.then((response) => {
    return response.json()
})
.then((data) => {
    let h5 = document.createElement("h5")
    let rand = Math.floor(Math.random() * 10)+1
    h5.innerText = data.data[`${rand}`].fact
    body.appendChild(h5)
    return fetch(url)
})
.then((response) => {
    return response.json()
})
.then((data) => {
    let h5 = document.createElement("h5")
    let rand = Math.floor(Math.random() * 10)+1
    h5.innerText = data.data[`${rand}`].fact
    body.appendChild(h5)
})
.catch((error) => {
    console.log("Error : " , error)
})