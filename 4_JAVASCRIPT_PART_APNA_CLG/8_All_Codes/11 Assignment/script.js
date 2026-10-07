let url = "http://universities.hipolabs.com/search?country="
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let universities = await fetchUniversities(country);

    list.innerHTML = ""; // Clear previous results

    universities.forEach((university) => {
        let li = document.createElement("li");
        li.textContent = university.name;
        list.appendChild(li);
    });
});

async function fetchUniversities(country) {
    try {
        let response = await axios.get(url + country);
        return response.data;
    } catch (error) {
        console.error("Error fetching universities:", error);
    }
}