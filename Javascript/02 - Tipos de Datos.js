var nombre = "Sergio"; //Cadenas - String
console.log(nombre)
console.log(typeof nombre)

var numero = 1000; //int - float - decimal
console.log(numero)
console.log(typeof numero)

var bandera = false; //boleano
console.log(bandera)
console.log(typeof bandera)

var objeto = { //Objeto
    nombre : "Sergio",
    apellido : "Lara",
    telefono : "5582-0032"
};
console.log(objeto);
console.log(typeof objeto)

function miFuncion(){} //Las funciones son tambien un tipo de datos
console.log(miFuncion)
console.log(typeof miFuncion)

var simbolo = Symbol("Mi simbolo") //Tipo simbolo
console.log(simbolo)
console.log(typeof simbolo)

class Persona{ //Las clases tambien son un tipo
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    };
}
console.log(Persona)
console.log(typeof Persona)

var x; //Datos indefinidos
console.log(x)
console.log(typeof x)

var z = undefined;
console.log(z)
console.log(typeof z)

var y = null //Tipo Null
console.log(y)
console.log(typeof y)

var v = ""; //Las cadenas vacias son string
console.log(v)
console.log(typeof v)

//Arreglos
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos)
console.log(typeof autos)

//Concatenación de cadenas
var nombre = "Juan"
var apellido = "Perez"
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto)

var x = nombre + 21 + 9;
console.log(x)

x = nombre + (2 + 4)
console.log(x)

x = 2 + 6 + nombre
console.log(x)

//  let - variables
//  const - constantes

