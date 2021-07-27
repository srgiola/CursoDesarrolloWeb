//Funciones normales

function miFunction1(){
    console.log('Función 1');
}
function miFunction2(){
    console.log('Función 2');
}

miFunction1();
miFunction2();

//Función de tipo Callback
// Este tipo de funciones son las que pasamos como agurmento y los ejecutamos
function imprimir(mensaje){
    console.log(mensaje);
}
function suma(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

suma(5, 3, imprimir)

//Llamadas asíncronas con uso setTimeout
function miFuncionCallback() {
    console.log("Saludos atrasados 3 segundos");
}

setTimeout(miFuncionCallback, 3000);


let reloj = () => {
    let fecha = new Date();
    console.log(fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds());
}
setInterval(reloj(), 1000);