// 1. Referenciamos los elementos del HTML
const botonAgregar = document.querySelector("main button")
const contadorCarrito = document.querySelector("nav span")

// 2. Inicializamos la cantidad leyendo del localStorage (si no hay nada, arranca en 0)
let cantidad = localStorage.getItem('cantidadCarrito') ? parseInt(localStorage.getItem('cantidadCarrito')) : 0

// Mostramos en pantalla el valor actual apenas carga la página
contadorCarrito.textContent = cantidad

// 3. Agregamos el escuchador de eventos al botón para sumar y persistir
botonAgregar.addEventListener("click", () => {
    cantidad++
    contadorCarrito.textContent = cantidad
    localStorage.setItem('cantidadCarrito', cantidad)
})