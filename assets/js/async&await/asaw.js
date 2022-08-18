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

// async function nombre () {

// }

// const entregoProyectos = async (portafolio, ecommerce) => {
//   try {
//     const promesa = await Promise.all([portafolio, ecommerce])
//     console.log(promesa)
//   } catch (error) {
//     console.log(error)
//   }
// }

// entregoProyectos(portafolio, ecommerce)

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

// // funciones autoejecutables
// (async ()=>{
//   await agregarAlCarrito()
//   await agregarAlCarrito()
//   await agregarAlCarrito()
//   await agregarAlCarrito()
//   await agregarAlCarrito()
// })()