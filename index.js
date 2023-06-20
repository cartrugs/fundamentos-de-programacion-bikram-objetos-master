// Objetos
//1
const Coche = {
    marca: 'Toyota',
    modelo: 'Auris',
    matricula: 'nasnas'
}
//2
const Casa = {
    codPostal: 99088,
    calle: 'hyper calle',
    portal: 6,
    piso: 1,
}
//3
const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
}
//4
let Perro = {
    nombre: 'dog',
    raza: 'husky',
    color: 'manchas',
    edad: 3,
    ladrar: ()=>{console.log('un ladrido')},
    popo: ()=>{return Math.random() * 3},
}

// Lectura de propiedades
//5
const Portatil = {
    marca: 'HP',  
    modelo: 'otro',
    color: 'silver', 
};

const marcaPortatil = Portatil.marca;
//6
const marcaPortatil2 = Portatil['marca']
//7
const Concierto = {
    grupos: ['Pink Floyd', 'Tool', 'Caifanes'],
}

let grupos = Concierto.grupos;
//8
const Led = {
    Rojo: 'red',
    Verde: 'green',
    Azul: 'blue',
}

const RGB = [Led.Rojo, Led.Verde, Led.Azul];

//Modificación de propiedades
//9
Portatil.modelo = P345;
//10
Concierto.cartelera = "Guns N' Roses";
//11
Concierto.fecha = new Date(20/jun/2023);
//12
const Impresora = {
    imprimiendo: 1,
}

Impresora.imprimiendo = {nombreArchivo: 'jindex.jis', copias: 1, numPaginas: 10};

//Objetos
//13
const Noticia = {
    titular: 'Homer Simpson',
    cuerpo: 'Created by Matt Groening',
}
//14
const Persona = {
    nombre: 'Homer',
    apellidos: 'Simpson', 
    edad: 44,
}
//15
const Avion = {
    numPasajeros: 1,
  
    despegar: () => {
      console.log('despegando');
    },
  
    volar: () => {
      console.log('llegando al destino');
    },
  
    aterrizar: () => {
      console.log('aterrizando');
    }
  }