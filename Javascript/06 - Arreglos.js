//Arreglo donde se reserva espación para posibles entradas
let autos = new Array('BMW', "Mercedez", 'Volvo');
console.log(autos);

//Arreglo donde no se reserva memoria para posibles entradas
const autos_2 =  ['BMW', 'Mercedez', "Volvo"];
console.log(autos_2);

console.log(autos[0]);

//Recorrer un arreglo
for (let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

//Modificar un valor de un arreglo
autos[1] = "Mercedes Benz";
console.log(autos[1]);

//Agregar un elemento
autos.push('Audi');
console.log(autos);

autos[5] = "Toyota";
console.log(autos);

autos[10] = "Nissan";
console.log(autos);

//Preguntar si es un Array
console.log(Array.isArray(autos));
console.log(Array.isArray(autos_2));

console.log(autos instanceof Array);
console.log(autos_2 instanceof Array);
