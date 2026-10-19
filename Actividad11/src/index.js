
//Funciones de declaración

//Sin retorno de valor
function saludar() {
  console.log("¡Hola, bienvenido!");
}
saludar();

//Sin retorno de valor
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Andrés");

//Retorno de valor
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
const resultadoMayorDeEdad = esMayorDeEdad(20);
console.log(resultadoMayorDeEdad); // true
console.log(esMayorDeEdad(15)); // false


//Funciones de flecha

//Mismo programa que 1, convertido a función flecha
const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};
const resultadoFlecha = esMayorDeEdadFlecha(17);
console.log(resultadoFlecha); // false

//Comparar dos números
const compararNumeros = (num1, num2) => {
  if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}`);
  } else if (num1 === num2) {
    console.log(`El número ${num1} es igual que ${num2}`);
  } else {
    console.log(`El número ${num1} es mayor que ${num2}`);
  }
};

//Se usa dentro de un bucle: el iterador es el primer parámetro
for (let i = 0; i <= 6; i++) {
  compararNumeros(i, 3);
}


// 3. Funciones callback

//Callbacks suma y resta
const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};

const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};

//operacion verifica que los argumentos sean números
const operacion = (num1, num2, callback) => {
  if (typeof num1 !== "number") {
    console.log("Debe ingresar solo números.");
    return;
  }
  if (typeof num2 !== "number") {
    console.log("Debe ingresar solo números.");
    return;
  }
  callback(num1, num2);
};

operacion(10, 5, suma); // El resultado de la suma es 15
operacion(10, 5, resta); // El resultado de la resta es 5
operacion("10", 5, suma); // Debe ingresar solo números.
operacion(10, "hola", resta); // Debe ingresar solo números.