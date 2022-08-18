// const esTuCumple = false

// const siEsTuCumple = new Promise ((resolve, reject) => {
//   if (esTuCumple) {
//     const promesa = {
//       regalo: '🎁',
//       mensaje: '🎉'
//     }

//     resolve(promesa)
//   } else {
//     reject('Lo siento no es tu cumple :(')
//   }
// })

// -state
// pendiente - cumplido resolve - rechazado reject
// - result - undenfined - {} - strError

// const siEs = (promesa) => {
//   console.log(promesa.regalo)
//   console.log('Felicidades!!! ', promesa.mensaje)
// }

// const noEs = (error) => {
//   console.log('Ooops!! ' + error)
// }

// // then
// siEsTuCumple.then(siEs, noEs)

// siEsTuCumple
//   .then((promesa) => {
//     console.log(promesa.regalo)
//     console.log('Felicidades!!! ', promesa.mensaje)
//   })
//   .catch((error) => {
//     console.log('Ooops!! ' + error)
//   })

// Ecadenamiento de Promesas
// const ahorrarMitad = true

// const loLograste = () => {
//   return new Promise ((resolve, reject)=> {
//     if (ahorrarMitad) {
//       const consola = {
//         modelo: 'Xbox X Series',
//         capacidad: '1tb'
//       }

//       resolve(consola)
//     } else {
//       reject('Sorry, no juntaste ni la mitad')
//     }
//   })
// }

// const presumirMiConsola = (consola) => {
//   const gritar = `Aquí feliz con mi ${consola.modelo} de ${consola.capacidad}`
//   return Promise.resolve(gritar)
// }

// loLograste()
//   .then((consola) => {
//     return presumirMiConsola(consola)
//   })
//   .then((gritar) => {
//     console.log(gritar)
//   })
//   .catch((error)=> {
//     console.log(error)
//   })

// let carrito = '🛒'

// const agregarAlCarrito = () => {
//   return new Promise ((resolve, reject) => {
//     setTimeout(()=> {
//       carrito += '📦'
//       console.log(carrito)
//       resolve()
//     }, 2000)
//   })
// }

// console.log(carrito)

// agregarAlCarrito()
//   .then(()=> agregarAlCarrito())
//   .then(()=> agregarAlCarrito())
//   .then(()=> agregarAlCarrito())
//   .then(()=> agregarAlCarrito())

// Promise.all()

// const entregasteTuPortafolio = (portafolio) => {
//   return new Promise((resolve, reject)=> {
//     if(portafolio) {
//       resolve('portafolio entregado')
//     } else {
//       reject('no entregaste a tiempo el portafolio')
//     }
//   })
// }

// const entregateElEcommerce = (ecommerce) => {
//   return new Promise ((resolve, reject)=> {
//     if(ecommerce) {
//       resolve('ecommerce entregado')
//     } else {
//       reject('no entregaste a tiempo el ecommerce')
//     }
//   })
// }

// const portafolio = entregasteTuPortafolio(true)
// const ecommerce = entregateElEcommerce(true)

// Promise.all([portafolio, ecommerce])
//   .then((response)=> {
//     console.log(response)
//   })
//   .catch((error)=> {
//     console.log(error)
//   })