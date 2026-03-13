const productos = [
    { nombre: "Abrigo", precio: 1500, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Lapices", precio: 50, categoria: "Educación" },
    { nombre: "Guantes", precio: 20, categoria: "Ropa" },
    { nombre: "iPod", precio: 99, categoria: "Electrónica" },
];

const resultado = productos 
// Filter
.filter(producto => producto.precio < 100) 
// Sort
.sort((a,b) => a.nombre.localeCompare(b.nombre)) 
// Map 
.map(producto => producto.nombre);

console.log('Resultados de usar los metodos Filter, Sort y Map')
console.log(resultado)