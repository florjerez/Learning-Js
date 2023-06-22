

let numero = 2;
let numero2 = 4;

let suma = numero + numero2;
let resta = numero - numero2;
let multiplicacion = numero * numero2; 
let division = numero / numero2; 

console.log ("Suma" , suma);
console.log ("resta", resta);
console.log ("multiplicacion", multiplicacion)

let numero3 = 5;

console.log (suma + numero3)






// let edad= 24;

// if (edad >= 18) {
//     console.log ("Sos mayor")
// }

// else if (edad >= 17) {
//     console.log ("CASI")
// }

// else {
//     console.log ("No eres mayor")
// }

// let age = 18;
// let tieneCarnet = true;
// if ( age >= 18 && tieneCarnet == true) { console.log ("Puedes conducir")}
 

// let cuentaAtras = 10

// while (cuentaAtras > 0) { console.log (cuentaAtras)
// cuentaAtras = cuentaAtras-1 }
// document.write ("Despegue!")

// let drinkCoffee = 0

// while (drinkCoffee < 10) {
//   drinkCoffee = drinkCoffee + 1
  
//   if (drinkCoffee === 8) { break }
//   if (drinkCoffee === 5) { continue }

//   console.log('Café')
// }

// let pregunta = confirm ("Quieres ir a tomar un cafe?") 
// while ( pregunta ==) {document.write ("Si quiere")}

// let numeroa= 10

// if (numeroa < 10) { console.log ("El numero es menor")}

// let numberUser = parseInt(prompt ("Ingrese un numero"));
// let numberUser2 = parseInt (prompt ("Ingrese un numero"))

// if (numberUser >= numberUser2) {
//     console.log ("El numero es mayor o igual")
// } else  { "El numero es menor"}

// let edadd = prompt("Ingrese su edad")

// if (edad >= 18 && edad<=30 ) console.log { "Tu tema es OJOS BONITOS"}


let edad = prompt("¿Cuántos años tienes?");

if (edad >= 18) {
  console.log("¡Bienvenido al evento!");
} else if (edad < 18) {
  let tutor = confirm("¿Vienes con un tutor?");
  if (tutor) {
    console.log("¡Bienvenido al evento con tu tutor!");
  } else {
    console.log("Lo siento, solo se permite el acceso con un tutor.");
  }
} else {
  console.log("Edad inválida. Por favor, proporciona una edad válida.");
}