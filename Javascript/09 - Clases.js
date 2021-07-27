class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    };

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    /* Metodo a sobreescribir en Empleado */
    nombreCompleto2(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto2();
    }
};

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

// Los metodos GET y SET dentro de una clase no hay necesidad de llamarlos fuera de la clase
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';

console.log(persona1.nombre);

// Herencia - Empleado hereda de Persona
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto2(){
        return super.nombreCompleto2() + ' - ' + this._departamento;
    }
}

let empleado1 = new Empleado('Sergio', 'Lara', 'Informatica');
console.log(empleado1);

console.log(empleado1.nombreCompleto());
console.log(empleado1.nombreCompleto2())

//Metodo toString()
console.log(empleado1.toString());