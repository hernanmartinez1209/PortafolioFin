/*
===== Módulos, introducción =====
*/
/*
Durante mucho tiempo, JavaScript existió sin una sintaxis de módulo a nivel de lenguaje.
Eso no fue un problema, porque inicialmente los scripts eran pequeños y simples,
por lo que no era necesario.

Pero con el tiempo los scripts se volvieron cada vez más complejos, por lo que la comunidad
inventó una variedad de formas de organizar el código en módulos.

Qué es un módulo?
Un módulo es solo un archivo. Un script es un módulo. Tan sencillo como eso.
*/

/*
Los módulos pueden cargarse entre sí y usar directivas especiales export e
import para intercambiar funcionalidad, llamar a funciones de un módulo de otro:
  - La palabra clave export etiqueta las variables y funciones que deberían ser accesibles
  desde fuera del módulo actual.
  - import permite importar funcionalidades desde otros módulos.
*/

/* Como los módulos admiten palabras clave y características especiales, debemos decirle
al navegador que un script debe tratarse como un módulo, utilizando el
atributo <script type =" module ">.
Los módulos funcionan solo a través de HTTP(s), no localmente
*/

/*
-Siempre en modo estricto
Los módulos siempre trabajan en modo estricto. Por ejemplo, asignar a una variable sin declarar
nos dará un error.

-Alcance a nivel de módulo
Cada módulo tiene su propio alcance de nivel superior. En otras palabras, las variables y funciones
de nivel superior de un módulo no se ven en otros scripts.
*/

/*
===== Import =====
*/

// importamos todo el script
// import './components/script.js'

// importamos tosos los export disponibles
// import * as script from './components/script.js'
// script.saludar()
// script.despedir()

// solo importa la funcion que necesitemos
// con as podemos cambiar el nombre a la variable
// import { saludar as saludarModulo } from './components/script.js'
// saludarModulo()

/*
===== Export =====
*/
// export const saludar = () => alert('hola')
// export const despedir = () => alert('adios')
// export let array = [1, 2, 3]
// export const CONSTANTE = 'EXPORT_CONST'
// export class Persona {
//   constructor(name) {
//     this.name = name
//   }  
// }

// al final del modulo 
// export { saludar }
/*
Exportar “as”:
*/
// export { saludar as saludarModule}

/*
Export default
*/

// import Persona from './components/script.js'
// alert(Persona)

/*
===== Import Explícitas vs Default =====
*/

// import Persona from './components/script.js'
// import { saludar } from './components/script.js'



