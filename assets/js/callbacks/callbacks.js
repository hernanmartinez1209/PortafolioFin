// console.log('Iniciar')
// let result = ''
// for(let i = 0; i < 800000000; i++) {
//   result = 'terminado'
// }
// console.log(result)
// console.log('otra tarea')

// sicrono (sync)
// const operacion = () => {
//   return 2 + 3
// }

// const imprimirResultado = (cb) => {
//   const result = cb()
//   console.log(result)
// }

// imprimirResultado(operacion)

// asincrono (async)

// const obtenerPokemon = () => {
//   console.log('Iniciando petición')
//   setTimeout(()=> {
//     console.log('Termina la petición')
//   }, 0)
// }

// const renderPokemon = () => {
//   console.log('Pokemon: pikuchu')
// }

// obtenerPokemon()
// renderPokemon()

// const obtenerPokemon = (renderPokemon) => {
//   console.log('Iniciando petición')
//   setTimeout(()=> {
//     console.log('Termina la petición')
//     renderPokemon()
//   }, 0)
// }

// const renderPokemon = () => {
//   console.log('Pokemon: pikuchu')
// }

// obtenerPokemon(renderPokemon)

// let carrito = '🛒'

// const agregarAlCarrito = (callback) => {
//   setTimeout(()=> {
//     carrito += '📦'
//     callback()
//   }, 2000)
// }

// console.log(carrito)

// agregarAlCarrito(()=> {
//   console.log(carrito)

//   agregarAlCarrito(()=> {
//     console.log(carrito)

//     agregarAlCarrito(()=> {
//       console.log(carrito)

//       agregarAlCarrito(()=> {
//         console.log(carrito)

//         agregarAlCarrito(()=> {
//           console.log(carrito)
//         })

//       })
//     })
//   })
// })
