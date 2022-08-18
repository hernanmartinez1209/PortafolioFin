const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'

const getPokemons = async () => {
  const res = await fetch(url)
  const {results} = await res.json()
  let pokemons = []
  for (let pokemon of results) {
    const res = await fetch(pokemon.url)
    const data = await res.json()
    pokemons.push(data)
  }
  localStorage.setItem('pokemons', JSON.stringify(pokemons))
  return pokemons
}

export const ceckLS = localStorage.getItem('pokemons') ? JSON.parse(localStorage.getItem('pokemons')) : getPokemons()

export const pokemonRender = async () => {
  const pokemons = await ceckLS
  let html = ''
  for (const pokemon of pokemons) {
    html += '<div>'
    html += `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`
    html += `<h2>${pokemon.name}</h2>`
    html += `<button id="catch" data-id="${pokemon.id}">catch</button>`
    html += '</div>'
  }
  pokemonContainer.innerHTML = html
}
