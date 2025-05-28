class Producto{
    //Inicializamos las propiedades
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    //Creamos nuestro metodo
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}
class Carrito{
    constructor(){
        this.productos = [];
    }
    //Método para agregar producto
    agregarProductos(producto){
        this.productos.push(producto)
    }
    //Método para cálcular el total
    calcularTotal(){
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }
    //Método para mostrar en lista los productos
    listarProductos(){
        return this.productos.map(pre => `<li> ${pre.mostrarDetalles()} </li>`).join('');
    }
}  

const  productosDisponibles = [
    new Producto(1, "Comedor", 200.00),
    new Producto(2, "Comedor Redondo", 500.00)
];

const carrito = new Carrito();

//Crear function

function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProductos(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    document.getElementById("lista-productos").innerHTML = carrito.listarProductos();
    document.getElementById("total").textContent = carrito.calcularTotal();
}