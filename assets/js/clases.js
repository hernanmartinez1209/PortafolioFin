const obj = {
  propiedad: 'valor'
}

console.log(obj.propiedad)

console.log(obj['propiedad'])

const { propiedad } = obj

console.log(propiedad)

// console.log(this)

// Objetos literales
const estudiante = {
  nombre: 'juan',
  edad: 30,
  email: 'juan@email.com',

  // getters
  get verNombre () {
    if(!this.nombre) throw new Error('no hay un nombre')
    return this.nombre
  },

  //setters
  set cambiarNombre (nombre) {
    if (typeof nombre !== 'string') throw new Error('El nombre debe ser un string')
    if (nombre === '') throw new Error('El nombre no puede estar vacío')
    if (nombre.length < 3) throw new Error('el nombre debe tener más de 3 caracteres')
    this.nombre = nombre
  },

  // métodos
  saludar() {
    return this.nombre + ' te dice hola'
  },

  despedir() {
    return this.nombre + ' te dice adios'
  }
}

// console.log(estudiante.saludar())
// console.log(estudiante.despedir())

// estudiante.nombre = 'Georg'
// console.log(estudiante.nombre)

// estudiante.cambiarNombre = 'Erik'
// console.log(estudiante.nombre)
// console.log(estudiante.verNombre)

// factory function
const Animal = function (nombre) {
  this.nombre = nombre

  // métodos
  this.saludar = function () {
    return 'hola soy ' + this.nombre
  }
}

const perro = new Animal('Doggy')
console.log(perro.saludar())
const gato = new Animal('Mishi')
console.log(gato.saludar())

// const estudiantes = (nombre, edad) => {
//   return {
//     nombre,
//     edad,
//     mostrarNombre() {
//       return 'hola soy ' + nombre
//     }
//   }
// }

// const georg = estudiantes('georg', 25)
// console.log(georg.mostrarNombre())

// clases - class constructor
/*
class Persona {
  propidad = valor

  contructor (..parámetros) {
    propidades = parámetro
  }

  métodos

  getters

  setters
}
*/

class Estudiante {
  constructor (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  activo = true
  
  // getters
  get verNombre () {
    if(!this.nombre) throw new Error('no hay un nombre')
    return this.nombre
  }

  //setters
  set cambiarNombre (nombre) {
    if (typeof nombre !== 'string') throw new Error('El nombre debe ser un string')
    if (nombre === '') throw new Error('El nombre no puede estar vacío')
    if (nombre.length < 3) throw new Error('el nombre debe tener más de 3 caracteres')
    this.nombre = nombre
  }

  static info () {
    return 'Hola soy una fabrica de estudiantes'
  }

  mostrarNombre () {
    return this.nombre
  }

  mostrarEdad () {
    return this.edad
  }
}

// const estudiante = new Estudiante('Jose', 25)
// const estudiante2 = new Estudiante('Marcos', 20)

// console.log(Estudiante.info())

// console.log(estudiante.nombre)
// console.log(estudiante.edad)
// console.log(estudiante.activo)
// console.log(estudiante.mostrarNombre())

// console.log(estudiante2.nombre)
// console.log(estudiante2.activo)
// console.log(estudiante2.edad)
// console.log(estudiante2.mostrarNombre())
// console.log(estudiante2.verNombre)
// console.log(estudiante2.cambiarNombre = 'Luis')
// console.log(estudiante2.verNombre)

// class Animal {
//   constructor (nombre) {
//     this.nombre = nombre
//   }

//   respirar () {
//     return 'estoy respirando'
//   }

//   comer () {
//     return 'comer'
//   }

//   saludar () {
//     return this.nombre + ' dice: soy un animal'
//   }
// }

// const perro = new Animal('Dog')
// console.log(perro.saludar())

// // class hijo extends padre
class Perro extends Animal {
  constructor (nombre, color) {
    super(nombre)
    this.color = color
  }

  respirar () {
    return 'soy perro y estoy respirando'
  }

  puedoHacer () {
    return `yo ${super.respirar()} y tambien puedo ${super.comer()}`
  }

  ladrar () {
    return 'Guauu!'
  }
}

// const bruno = new Perro('Bruno', 'Blanco')
// console.log(bruno.respirar())
// console.log(bruno.comer())
// console.log(bruno.saludar())
// console.log(bruno.puedoHacer())
