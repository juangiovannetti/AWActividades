//estrecutra de control -> de bucle 

//1. Estructuras de control CONDICIONALES

// Mayor de edad
const edad = 20

if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

// Par o impar
const numero = 7

if (numero % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

//Nota
const nota = 8
 
if (nota < 4) {
    console.log("Reprobado")
} else if (nota >= 4 && nota <= 7) {
    console.log("Aprobado")
} else if (nota > 7) {
    console.log("Excelente")
}


//2. Estructuras de control BUCLES

// Del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Par o impar con bucle (20 iteraciones, el índice arranca de 0)
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par")
    } else {
        console.log("El número es impar")
    }
}

// Lo mismo pero concatenando el número con template literals
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`)
    } else {
        console.log(`El número ${i} es impar`)
    }
}