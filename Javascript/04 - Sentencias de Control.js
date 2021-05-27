let condicion = true;
let numero = 4;

if (condicion){
    console.log("Condición verdadera");
}
else if (numero == 4){
    console.log("Numero igual a 4");
}
else{
    console.log("Condición falsa");
}

let op = "x";
//switch usa la comparación estricta '==='
switch (op){
    case "a": case "b": case "c":
        console.log("Case a, b o c");
        break;
    case "x":
        console.log("Case x");
        break;
    case 5:
        console.log("Case 5");
        break;
    default:
        console.log("Caso no encontrado");
}