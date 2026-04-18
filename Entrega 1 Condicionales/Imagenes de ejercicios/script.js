
// NIVEL 1 - CONDICIONALES

// 1. VALIDADOR DE EDAD

let edad = parseInt(prompt("Ingresa tu edad"));

if (isNaN(edad)) {
    alert("Error: ingresa un número");
} else if (edad < 18) {
    alert("Acceso denegado");
} else {
    alert("Bienvenido");
}


// 2. HELADOS
{
    let topping = prompt("Oreo, KitKat o Brownie");
    let precioHelado = 5;

    if (topping !== null) {
        switch (topping.toLowerCase()) {
            case "oreo":
                precioHelado += 2;
                break;
            case "kitkat":
                precioHelado += 3;
                break;
            case "brownie":
                precioHelado += 4;
                break;
            default:
                alert("Topping inválido");
        }

        console.log("Precio final:", precioHelado);
    }
}


// 3. PAR O IMPAR

let numParImpar = parseInt(prompt("Ingresa un número"));

if (isNaN(numParImpar)) {
    alert("Error");
} else if (numParImpar % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}


// 4. DÍA DE LA SEMANA

let dia = parseInt(prompt("1-7"));

switch (dia) {
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("Error");
}


// 5. CALCULADORA

let n1 = parseFloat(prompt("Número 1"));
let n2 = parseFloat(prompt("Número 2"));
let op = prompt("suma, resta, mult, div");

let res;

switch (op) {
    case "suma": res = n1 + n2; break;
    case "resta": res = n1 - n2; break;
    case "mult": res = n1 * n2; break;
    case "div": res = n2 !== 0 ? n1 / n2 : "Error división"; break;
}

console.log("Resultado:", res);


// 6. PROMEDIO

let a = parseFloat(prompt("Nota 1"));
let b = parseFloat(prompt("Nota 2"));
let c = parseFloat(prompt("Nota 3"));

let promedio = (a + b + c) / 3;

console.log(promedio >= 6 ? "Aprobado" : "Reprobado");


// 7. CONVERSOR

let dolares = parseFloat(prompt("Dólares"));
let moneda = prompt("euros, pesos, soles");

let resultadoConv;

switch (moneda) {
    case "euros": resultadoConv = dolares * 0.9; break;
    case "pesos": resultadoConv = dolares * 4000; break;
    case "soles": resultadoConv = dolares * 3.7; break;
}

console.log("Resultado:", resultadoConv);


// NIVEL 2 - BUCLES

// 8. CUENTA REGRESIVA

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i1 = 10;
while (i1 >= 1) {
    console.log(i1);
    i1--;
}

let i2 = 10;
do {
    console.log(i2);
    i2--;
} while (i2 >= 1);


// 9. SUMA ACUMULATIVA

let nSuma = parseInt(prompt("Número"));
let suma = 0;

for (let i = 1; i <= nSuma; i++) {
    suma += i;
}

console.log("Suma:", suma);


// 10. MÚLTIPLOS DE 5

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


// 11. CLAVE MAESTRA

let clave = "";

while (clave !== "SESAMO123") {
    clave = prompt("Contraseña:");
}

console.log("Acceso concedido");


// 12. POTENCIAS

let numPot = parseInt(prompt("Número"));

for (let i = 1; i <= 5; i++) {
    console.log(numPot ** i);
}


// 13. POSITIVOS

let x;

do {
    x = parseInt(prompt("Número (negativo sale)"));
    if (x >= 0) console.log(x);
} while (x >= 0);



// NIVEL 3 - ARRAYS Y OBJETOS

// 14. ARRAY DE COMPRAS

let compras = [];

for (let i = 0; i < 5; i++) {
    let producto = prompt("Producto:");
    compras.push(producto);
}

console.log(compras);


// 15. BUSCADOR DE NOMBRES

let nombres = ["Ana", "Luis", "Pedro", "Maria", "Juan"];
let buscar = prompt("Nombre:");

let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === buscar) {
        encontrado = true;
    }
}

console.log(encontrado ? "Existe" : "No existe");


// 16. OBJETO AUTO

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

auto.año = parseInt(prompt("Nuevo año"));

console.log(auto);


// 17. ESTUDIANTES

let estudiantes = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Nombre");
    let nota = parseFloat(prompt("Nota"));

    estudiantes.push({ nombre, nota });
}

console.log(estudiantes);


// 18. CARRITO DESCUENTO

let total = 0;
let precioCarrito;

do {
    precioCarrito = parseFloat(prompt("Precio (0 para salir)"));

    if (precioCarrito > 0) {
        total += precioCarrito;
    }

} while (precioCarrito !== 0);

if (total > 100) {
    total *= 0.9;
}

console.log("Total:", total);


// 19. MENÚ INFINITO

let opcion;

do {
    opcion = prompt("1.Saludar 2.Despedir 3.Salir");

    switch (opcion) {
        case "1":
            console.log("Hola");
            break;
        case "2":
            console.log("Adiós");
            break;
    }

} while (opcion !== "3");


// 20. REEMPLAZO ARRAY

let numeros = [10, 20, 30, 40, 50];

let nuevoNum = parseInt(prompt("Número nuevo"));
let pos = parseInt(prompt("Posición 0-4"));

numeros[pos] = nuevoNum;

console.log(numeros);