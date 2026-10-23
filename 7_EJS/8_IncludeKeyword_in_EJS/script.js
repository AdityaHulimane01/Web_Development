const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname)));

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    const instaData = require("./data.json");
    const data = instaData[username];

    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});