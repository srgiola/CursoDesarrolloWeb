//Objeto
let persona = {
    nombre: "Sergio",
    apellido: "Lara",
    email: "slara@mail.com",
    edad: 22,
    //Esta es una función del Objeto
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona);
console.log(persona.nombreCompleto());


let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Zona 1";
persona2.tel = "55554444";
console.log(persona2);


for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//Agregar nueva propiedad
persona.tel = "55554444"
console.log(persona);

//Eliminar propiedad
delete persona.tel;
console.log(persona);

//Imprimir en formato JSON
let personaJson = JSON.stringify(persona);
console.log(personaJson);

//Metodo Get en Objetos
let persona3 = {
    nombre: "Juan",
    apellido: "Perez",
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombreCompleto());
persona.lang = 'dt';
console.log(persona.lang);
console.log(persona.idioma);

//Objetos con constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email
}

let padre = new Persona("Juan", "Perez", "jpere@mail.com");
let madre = new Persona("Laura", "Quintero", "lquin@mail.com");

console.log(padre);
console.log(madre);