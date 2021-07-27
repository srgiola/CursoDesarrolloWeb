try{
    miFuncionError();
}
catch(err){
    console.log(err);
}
finally{
    console.log("Hubo error pero aca seguimos");;
}
console.log("Continuamos...")


let resultado = "No es un numero";
try{
    if(isNaN(resultado)) throw 'No es un numero';
}
catch(err){
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}