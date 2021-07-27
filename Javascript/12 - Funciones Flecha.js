function miFuncion(){
    console.log("Función normal")
}
miFuncion()

let miFuncionFlecha = () =>{
    console.log("Función flecha");
}
miFuncionFlecha();

let saludar = () => ({code: 200, msg:'Hola'});
console.log(saludar());

let funcionHola = (nombre) => 'Hola' + ' ' + nombre;
console.log(funcionHola('Sergio'))