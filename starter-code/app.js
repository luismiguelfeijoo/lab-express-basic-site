const express = require("express");
const hbs = require("hbs");
const app = express();
const dotenv = require('dotenv').config()

const chargeRandom = () => new Promise( (resolve,reject) => resolve()) // try to generate random characters on every call to the server

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

const data = require("./scripts/data.js")
const imageSearch = require("./scripts/image-search")



hbs.registerPartials(__dirname + "/views/partials");

app.use("/public", express.static(__dirname + "/public"));
app.use("/scripts", express.static(__dirname + "/scripts"));


//created this way to let an image as an active element of the carousel
const series = {
  first : {url: "/public/images/hp.jpg", path: "/harrypotter"},
  rest: [
  {url: "/public/images/sw.png", path: "/starwars"},
  {url: "/public/images/pokemon.jpg", path: "/pokemon"}
]}

app.get('/', (request, response) => {
  response.render("home", series)
});

app.get('/harrypotter', (request, response) => {
  data.hp().then( (result) => {
    imageSearch.client.search(result[0].full, imageSearch.options).then( (images) => {
      response.render("harrypotter", {hp: result[0], image: images[0].url});
    }).catch( () => {
      response.render("harrypotter", {hp: result[0], image: "/public/images/not-found.png"});
    })
  }) 
});


app.get('/pokemon', (request, response) => {
  data.pokemon().then( (result) => {
    
    imageSearch.client.search(result[0].name, imageSearch.options).then( (images) => {
      response.render("pokemon", {pokemon: result[0], image: images[0].url});
    }).catch( () => {
      response.render("pokemon", {pokemon: result[0], image: "/public/images/not-found.png"});
    })
  }) 
});


app.get('/starwars', (request, response) => {
  data.sw().then( (result) => {
    
    imageSearch.client.search(result[0].name, imageSearch.options).then( (images) => {
      response.render("starwars", {sw: result[0], image: images[0].url});
    }).catch( () => {
      response.render("starwars", {sw: result[0], image: "/public/images/not-found.png"});
    })
  }) 
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