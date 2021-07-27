// Modelos
class Producto{
    static contador = 0;

    constructor(nombre, precio){
        this.id = Producto.contador++;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString(){
        return `id: ${this.id} \nnombre: ${this.nombre} \nprecio: Q.${this.precio}`
    }
}

class Orden{
    static contador = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(){
        this.id = Orden.contador++;
        this.productos = [];
        this.cantProductos = 0;
    }

    agregarProducto(producto){
        if(this.cantProductos < Orden.MAX_PRODUCTOS){
            this.productos.push(producto);
            this.cantProductos++;
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        
        this.productos.forEach(producto => {
            totalVenta += producto.precio;
        })

        return totalVenta;
    }
    mostrarOrder(){
        let productosOrden = "";

        this.productos.forEach(producto => {
            productosOrden += producto.toString() + '\n';
        })
        console.log(`Orden: ${this.id} \nTotal: Q.${this.calcularTotal()} \nProductos: ${productosOrden}`);
    }
}

//Main

let producto1 = new Producto('Pantalon', 100.50);
let producto2 = new Producto('Camisa', 75.25);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
console.log(orden1.mostrarOrder());