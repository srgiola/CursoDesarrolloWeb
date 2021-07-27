//Promesa normal
let miPromesa = new Promise((res, err) => {
    let expresion = true;
    if(expresion)
        res('Todo fue un exito');
    else
        err('Se proujo un error');
});

miPromesa.then(
    res => console.log(res),
    error => console.log(error)
);

miPromesa.then(
    res => console.log(res)
).catch(
    err => console.log(err)
);


// Promesa con Timeout
let promesa = new Promise((res) => {
    setTimeout(() => res('Saludos con promesa y timeout'), 3000);
});

promesa.then(res => console.log(res));


// async = indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'Saludos con promesa y Async';
}

miFuncionConPromesa().then(res => console.log(res));


// async y await
async function funcionConPromesaYAwait() {
    let miPromesa_ = new Promise(res => {
        res('Promesa con await');
    });

    console.log( await miPromesa_);
}

funcionConPromesaYAwait();