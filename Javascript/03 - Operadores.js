/*
Operadores:
    +   Suma
    -   Resta
    *   Multiplicación
    **  Exponente
    /   División
    %   Modulo
    ++  Incremento
    --  Decremento
*/

let a = 3,
    b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta:" + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z)

z = a % b;
console.log("Resultado del modulo: " + z)

z = a ** b;
console.log("Resultado del exponente: " + z)

let c = 5,
    x = 0;

//Pre-Incremento: el operador '++' antes de la variable
x = ++c; //toma la literal, la incrementa y luego la asigna
console.log(c);
console.log(x);

//Post-Incremento: el operador '--' despues de la variable
x = c++; //toma la literal, la asigna y luego la incrementa fuera de la asignación
console.log(c)
console.log(x)

//Pre-Decremento: el operador '--' antes de la variable
x = --c; //toma la literal, la decrementa y luego la asigna
console.log(c)
console.log(x)

//Post-Decremento: el operador '--' despues de la variable
x = c--; //toma la literal, la asigna y luego la decrementa fuera de la asignación
console.log(c)
console.log(x)


//Precedencia de Operadores
/*
    Nivel   Operadores                              Nivel   Operadores
    15      () [] . new                             7       ^
    14      ++ -- + - ! ~ delete typeof void        6       |
    13      * / %                                   5       &&
    12      + -                                     4       ||
    11      >> <<                                   3       ?:
    10      < <= > >=                               2       = += -= *= /= %= &= ^= |= <<= >>=
    9       == != === !==                           1       ,
    8       &
*/
a = 3, b = 2, c = 1;
//Las expresiones se evaluan de izquierda a derecha
z = a * b + c;
console.log(z);

z = c + a * b;
console.log(z);

z = (c + a) * b / c
console.log(z);

//Operadores de Comparación
a = 3, b = 2, c = '3';

z = (a == b); //Se revisa el valor sin importal el tipo
console.log(z);

z = (a == c)
console.log(z);

z = (a === b); //Se revisa si los valores son iguales pero tambien los tipos
console.log(z)

z = (a === c);
console.log(z);

a = 5;
let valMin = 0, valMax = 10;
// && --> AND
if (a >= valMin && a <= valMax){
    console.log("Dentro de rango")
}

let vacaciones = false, diaDescanso = true;
// || --> OR
if (vacaciones || diaDescanso){
    console.log("Dia libre")
}

//Operador Ternario
let resultado = (1 > 2) ? "verdadero" : 0;
console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resultado)

let strNumero = "10";
console.log(strNumero);
console.log(typeof strNumero);

let edad = Number(strNumero);
console.log(edad);
console.log(typeof edad);

resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(resultado)

//NaN = Not a Number
if (isNaN(edad)){
    console.log("Variable no es un numero");
}
else{
    console.log("Variable es un numero")
}