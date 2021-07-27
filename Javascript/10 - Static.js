class Persona{
    //Valor Estatico
    static cant = 0;

    //Valor No Estatico
    edad = 0;

    //Constante --> Estas deben ser declaradas en forma 
    //              de metodo ya que si son variables siempre pueden ser modificadas en JS
    static get MAX_OBJ(){
        return 3;
    }

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;

        if(Persona.cant < Persona.MAX_OBJ){
            this._id = Persona.cant++;
        }
        else{
            console.log('Se ha superado el maximo de usuarios');
        }
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

    toString(){
        return this.nombreCompleto2();
    }

    static saludar(persona){
        console.log("Hola " + persona.nombre);
    }
};

let persona1 = new Persona('Sergio', 'Lara', 22);
console.log(persona1);

let persona2 = new Persona('Daniel', 'Vasquez', 25);
console.log(persona2)

let persona3 = new Persona('Evelyn', 'Mendes', 52);
console.log(persona3);

let persona4 = new Persona('Sophia', 'Cruz', 21);
console.log(persona4)