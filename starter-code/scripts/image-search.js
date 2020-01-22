const imageSearch = require('image-search-google');

//You'll need to set up your own Google Custom Search Engine to execute queries


module.exports = {
  client : new imageSearch(process.env.GOOGLE_ID,process.env.GOOGLE_API),
  options : {page: 1}
}
