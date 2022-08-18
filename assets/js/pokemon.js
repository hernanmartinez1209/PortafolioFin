import {pokemonRender} from './pokemodule/pokemons.js'
import { catchPokemon, pokeBagRender, removePokemon } from './pokemodule/pokeBag.js'

document.addEventListener('DOMContentLoaded', () => {
  pokemonRender()
  pokeBagRender()
})

wrapper.addEventListener('click', (e) => {

  if(e.target.matches('#catch')) {
    const id = e.target.dataset.id
    catchPokemon(+id)
    pokeBagRender()
  }

  if(e.target.matches('#remove')) {
    const id = e.target.dataset.id
    removePokemon(+id)
    pokeBagRender()
  }
})