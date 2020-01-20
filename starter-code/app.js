const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//app.use("/scripts", express.static(__dirname + "/scripts"));
const data = require("./scripts/data.js")

 
const hp = data.hp.then( (result) => result)
const pokemon = data.pokemon.then( (result) => result)
const sw = data.sw.then( (result) => result)


//hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/public"));

app.get('/', (request, response) => {
  response.render("home");
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));