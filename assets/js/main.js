// Imports
import { formulario } from './components/formulario.js'
import { headerScroll } from './components/headerScroll.js'
import { navMenu } from './components/navMenu.js'

// Módulos de la página
document.addEventListener('DOMContentLoaded', () => {
  navMenu()
  headerScroll()
})

// Loader
window.addEventListener('load', () => {

})

// Formulario
formContainer.addEventListener('submit', (e) => {
  e.preventDefault()
  formulario(e)
})