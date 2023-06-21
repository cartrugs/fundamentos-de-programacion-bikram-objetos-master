// Objetos
//1
const Coche = {
  marca: "Toyota",
  modelo: "Auris",
  matricula: "nasnas",
};
//2
const Casa = {
  codPostal: 99088,
  calle: "hyper calle",
  portal: 6,
  piso: 1,
};
//3
const FullStackDeveloper = {
  lenguajes: [],
  proyectos: [],
};
//4
let Perro = {
  nombre: "dog",
  raza: "husky",
  color: "manchas",
  edad: 3,
  ladrar: () => {
    console.log("guau");
  },
  popo: () => {
    return Math.random() * 3;
  },
};

// Lectura de propiedades
//5
const marcaPortatil = Portatil.marca;
//6
const marcaPortatil2 = Portatil["marca"];
//7
let grupos = Concierto.grupos;
//8
let RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propiedades
//9
Portatil.modelo = "P345";
//10
Concierto.cartelera.push("Guns N' Roses");
//11
Concierto.fecha = new Date();
//12
Impresora.imprimiendo = {
  nombreArchivo: "jindex.jis",
  copias: 1,
  numPaginas: 10,
};

//Objetos
//13
const Noticia = {
  titular: "Homer Simpson",
  cuerpo: "Created by Matt Groening",
};
//14
const Persona = {
  nombre: "Homer",
  apellidos: "Simpson",
  edad: 44,
};
//15
const Avion = {
  numPasajeros: 1,

  despegar: () => {
    console.log("despegando");
  },

  volar: () => {
    console.log("llegando al destino");
  },

  aterrizar: () => {
    console.log("aterrizando");
  },
};
//16
const Paquete = {
  contenido: [],
};
//17
const Pais = {
  numHabitantes: 90,
  continente: "Lilliput",
  gentilicio: "liliputiense",
}

//Lectura de propiedades
//18
const codError = O_Error.codigo;
//19
const integrantes = Grupo.integrantes;
//20
const nivelesTinta = Impresora.tinta;
//21
const pixeles = Pantalla['pixeles'];
//22
const especificaciones = Movil['especificaciones'];

//Modificación de propiedades
//23
Grupo.numIntegrantes=5;
//24
Pantalla.dimensiones='1920x1080';
//25
Led.encendido = !Led.encendido;
//26
Movil.temperatura = '20º';
