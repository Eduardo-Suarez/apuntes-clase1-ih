//Esto es un comentario!
console.log("Hola Mundo")
console.log("Como estas?")
// ES5 - Javascript Tradicional
var botella = "Agua Santa Maria"

// ES6+ - Javascript moderno
let carro = "Kia"
let saludo = "Hola Eduardo"
let cuaderno = "Scribe"

// Expresiones numericas.
/*
Suma +
Resta - 
Multiplicacion * 
Division /
*/

// Texto o String
// ES5 - JAVASCRIPT TRADICIONAL
const miNombre = "Cesar" + " Eduardo"
console.log(miNombre)
const miApellido = `Contreras Suarez`
console.log(miApellido)

const gorilla = "Kong"
const reptil = "Godzilla"
// ES5
const pelea = gorilla + " vs " + reptil // CONCATENACION
console.log(pelea)
// ES6
const batalla = `${gorilla} vs ${reptil}` // INTERPOLACION
console.log(batalla)

const message = "Javascrip en ironhack!"
console.log (message.indexOf("en"))
console.log (message.indexOf("i"))
console.log (message.indexOf("k"))

// repeat, hace lo que su mismo nombre dice.

console.log("$".repeat(7))
console.log("la".repeat(3))

//localeCompare - Metodo que retorna un numero indicando si un string viene antes o despues o es lo mismo de acuerdo a una jerarquia de ordenamiento.


// Escrito de numeros grandes.
const someVar =1e10
console.log(someVar)

/*
Condicionales
*/

if (8 > 4){
    console.log("8 es mayor a 4")
}

if (10 > 2){
    console.log("10 es mayor a 2")
}

if (1 > 7){
    console.log("1 es mayor a 7")
}else{
    console.log("el numero no es mayor a 7")
}

let hour = parseInt(prompt("Que hora es?"))

if (hour >= 0 && hour <= 1159) {
    console.log("buenos dias!");

} else if (hour >= 1200 && hour <= 1759) {
    console.log("buenas tardes!");

} else if (hour >= 1800 && hour <= 2359) {
    console.log("buenas Noches!");

} else {
    console.log("ingrese otra hora!");
}

// switch
switch("mike"){
    case "eduardo":
        console.log("hola soy eduardo")
        break
    case "mike":
            console.log("Hola soy mike")
        break
    default:
        console.log("no encontre ninguna coincidencia")
}

switch("espanol"){
    case "ingles":
        console.log("hello")
        break
    case "aleman":
            console.log("hallo")
        break
    case "espanol":
        console.log("hola")
        break
    default:
        console.log("no encontre ninguna coincidencia")
}

// for

for(let i = 90; i<=100; i++)
{
    console.log(i)
}

// for .... of statement 
// generando una variable
const someIterable = `amsterdam`;

for (const value of someIterable){
    console.log(value);
}

var i=0; for (i=0;i<=5;i++) {
    console.log("El número es " + i);
}
    
    
    
    