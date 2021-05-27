let contador = 0;

while (contador < 3){
    console.log(contador);
    contador++;
}

contador = 0;
do{
    console.log(contador);
    contador++;
}while(contador < 3);

for (let cont = 0; cont < 3; cont++){
    console.log(cont)
}

for (let cont = 0; cont <= 10; cont++){
    if(cont % 2 == 0){
        console.log(cont)
    }
    else{
        break; //Detiene el ciclo
    }
}

for(let cont = 0; cont <= 10; cont++){
    if(cont % 2 != 0){
        continue; //Indica ir inmediatamente con la siguiente iteración
    }
    console.log(cont);
}

inicio:
for(let cont = 0; cont <= 10; cont++){
    if(cont % 2 != 0){
        continue inicio; // goto inicio
    }
    console.log(cont);
}

