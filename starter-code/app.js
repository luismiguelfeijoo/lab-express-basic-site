const express = require("express");
const hbs = require("hbs");
const app = express();
const dotenv = require('dotenv').config()

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

const data = require("./scripts/data.js")
const imageSearch = require("./scripts/image-search")



hbs.registerPartials(__dirname + "/views/partials");

app.use("/public", express.static(__dirname + "/public"));

//created this way to let an image as an active element of the carousel
const series = {
  first : "/public/images/hp.jpg",
  rest: [
  {path: "/public/images/sw.png"},
  {path: "/public/images/pokemon.jpg"}
]}

app.get('/', (request, response) => {
  //response.send(imageSearch.client.search("Harry Potter", imageSearch.options).then( (images) => images).catch(error => console.log(error)) )
  /*const pokemon = data.pokemon.then( (result) => {
    console.log(result)
    response.render("home", {pokemon:result[0]});
  })
  */
  response.render("home", series)
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));

//const imageSearch = require("./scripts/image-search")

//const image = imageSearch.client.search("Harry Potter", imageSearch.options).then( (images) => images).catch(error => console.log(error))

/*
const hp = data.hp.then( (result) => result)
const pokemon = data.pokemon.then( (result) => result)
const sw = data.sw.then( (result) => result)
*/