const nerds = require('nerds')

module.exports = {
  hp : nerds.resolve('Harry Potter').asPromise(),
  pokemon : nerds.resolve('Pokemon').asPromise(),
  sw : nerds.resolve('Star Wars').asPromise() 
}

/*
[{
    'first': 'Hermione',
    'last': 'Granger',
    'full': 'Hermione Granger',
    'blood_status': 'Muggle-Born',
    'birthday': '19 September, 1979',
    'gender': 'Female',
    'house': 'Gryffindor',
    'wand': '10¾", Vine Wood - Dragon Heartstring'
}]
*/

/*
[{
  national_pokedex_number: '086',
  name: 'Seel',
  type: 'Water',
  height: '1.1m',
  weight: '90.0kg',
  total: 325,
  hp: 65,
  attack: 45,
  defense: 55,
  special_attack: 45,
  special_defense: 70,
  speed: 45,
  base_experience: 65,
  evolves_from: 'Egg'
}]
*/

/*
[{
    name: 'Wilhuff Tarkin',
    gender: 'Male',
    skin_color: 'Fair',
    hair_color: 'Auburn, Grey',
    height: 180,
    eye_color: 'Blue',
    mass: 'Unknown',
    homeworld: 'Eriadu',
    birth_year: '64BBY'
}]
*/
