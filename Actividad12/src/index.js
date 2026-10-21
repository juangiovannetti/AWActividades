
//ARREGLOS

// Cargar 5 números con prompt() y guardarlos con push()
console.log("--- 1.a ---");
const numeros = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`Ingresá el número ${i + 1} de 5:`));
  numeros.push(numero);
}
console.log(numeros);

//Guardar solo los números impares
console.log("--- 1.b ---");
const impares = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`Ingresá el número ${i + 1} de 5 (solo se guardan los impares):`));
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
}
console.log(impares);

//forEach() para pasar a MAYÚSCULAS (modifica el mismo arreglo)
console.log("--- 1.c ---");
const frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, indice, arreglo) => {
  arreglo[indice] = fruta.toUpperCase();
});
console.log(frutas);

//map() (no destructivo, crea un arreglo nuevo)
console.log("--- 1.d ---");
const frutasOriginales = ["pera", "manzana", "banana", "durazno"];
const frutasMayusculas = frutasOriginales.map((fruta) => fruta.toUpperCase());
console.log("Original:", frutasOriginales);
console.log("Nuevo:", frutasMayusculas);

//filter() con includes(): solo frutas que contengan "na"
console.log("--- 1.e ---");
const frutasConNa = frutasOriginales.filter((fruta) => {
  if (fruta.includes("na")) {
    return true;
  }
  return false;
});
console.log(frutasConNa); // ["manzana", "banana"]



// 2. OBJETOS

//Un objeto producto
console.log("--- 2.a ---");
const producto = {
  nombre: "Remera básica",
  precio: 15000,
  stock: 12,
  talles: ["s", "m", "l"],
};
console.log(producto);

//Arreglo de 4 productos; forEach() muestra los de stock < 5
console.log("--- 2.b ---");
const productos = [
  { nombre: "Remera básica", precio: 15000, stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Jean clásico", precio: 45000, stock: 3, talles: ["s", "m", "l"] },
  { nombre: "Campera de abrigo", precio: 80000, stock: 15, talles: ["m", "l"] },
  { nombre: "Gorra", precio: 9000, stock: 2, talles: ["s", "m", "l"] },
];

productos.forEach((prod) => {
  if (prod.stock < 5) {
    console.log(prod);
  }
});

//map() con 10% de descuento (sin modificar el arreglo original)
console.log("--- 2.c ---");
const productosConDescuento = productos.map((prod) => {
  return {
    ...prod,
    precio: prod.precio * 0.9,
  };
});
console.log(productosConDescuento);

//filter() de productos con stock > 10
console.log("--- 2.d ---");
const productosConMuchoStock = productos.filter((prod) => prod.stock > 10);
console.log(productosConMuchoStock);