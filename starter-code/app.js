const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//app.use("/scripts", express.static(__dirname + "/scripts"));
const data = require("./scripts/data.js")

hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/public"));

app.get('/', (request, response) => {
  response.render("home", {personajes});
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));