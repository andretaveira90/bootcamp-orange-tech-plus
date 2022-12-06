
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url) // promisse
  .then((response) => response.json())
  .then((jsonBody) => console.log(jsonBody)) // recebe o retorno do then anterior
  .catch((error) => console.log(error))