const imageSearch = require('image-search-google');

//You'll need to set up your own Google Custom Search Engine to execute queries

module.exports = {
  client : new imageSearch('CSE ID', 'API KEY'),
  options : {page: 1}
}
