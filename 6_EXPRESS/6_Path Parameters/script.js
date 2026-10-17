const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params; // Extract route parameters

    let html = `<h1>Welcome to the @${username} profile!</h1>`;

    console.log(`App is listening on port ${port}`);
    console.log(req.params);

    res.send(html);
});

