//Declaración de la función
function miFuncion(a, b){
    console.log("Suma: " + (a + b));
}

miFuncion(2,3);

function miFuncion2(a, b){
    return a + b;
}
let resultado = miFuncion2(5, 3);
console.log(resultado);


//Declaración de 'Función tipo expresión'
let x = function(a,b){return a + b};
resultado = x(1,2);
console.log(resultado);


//Funciones 'Self-Invoking'
(function (a,b){
    console.log("Ejecutando la función self-invoking");
    console.log(a + b);
})(3,2); //Estas funciones no se puede reutilizar


//Una función tambien se puede describir como un objeto
var miFuncionTexto = miFuncion2.toString();
console.log(miFuncionTexto);


//Funciones flecha
const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(3,6);
console.log(resultado);

const sumarFuncionTipoFlecha2 = (a,b) => {
    return a + b
};
resultado = sumarFuncionTipoFlecha2(10,6);
console.log(resultado);


//Parametros y Argumentos en una función
let sumar = function (a = 4, b = 4){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
}
/* No es necesario enviar cabal los parametros
  pueden ser mas o menos la cantidad, y de igual
  forma funcionara la llamada y la función */
resultado = sumar(3, 6, 10);
console.log(resultado);


//Funciones con Valores por referencia
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}
console.log(persona);
const cambiarValorObjeto =(p1) => {
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}
cambiarValorObjeto(persona);
console.log(persona);
