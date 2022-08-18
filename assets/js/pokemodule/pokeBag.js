import {ceckLS} from './pokemons.js'

let bag = localStorage.getItem('pokeBag') ? JSON.parse(localStorage.getItem('pokeBag')) : []

export const catchPokemon = (id) => {
  const pokemon = ceckLS.find((pokemon)=> pokemon.id === id)
  bag.push(pokemon)
  localStorage.setItem('pokeBag', JSON.stringify(bag))
}

export const removePokemon = (id) => {
  const pokemon = ceckLS.find((pokemon)=> pokemon.id === id)
  bag.splice(bag.indexOf(pokemon), 1)
  localStorage.setItem('pokeBag', JSON.stringify(bag))
}

export const pokeBagRender = async () => {
  let html = ''
  for (let pokemon of bag) {
    html += '<div>'
    html += `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`
    html += `<h2>${pokemon.name}</h2>`
    html += `<button id="remove" data-id="${pokemon.id}">X</button>`
    html += '</div>'
  }
  pokebagContainer.innerHTML = html
}