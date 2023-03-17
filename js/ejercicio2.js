/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Crea un array vacío
var miArray = [];

// Utiliza un ciclo while para permitir al usuario ingresar valores hasta que presione "Cancelar"
while (true) {
  var valor = prompt("Ingrese un valor para el array:");
  if (valor === null) {
    break; // Sale del ciclo si el usuario presiona "Cancelar"
  }
  miArray.push(valor); // Agrega el valor al array
}

    document.write('El array tiene :' +miArray.length + 'elementos <br>')

document.write('El elemento de la primera posicion es :' + miArray[0] +'<br>')
document.write('El elemento de la tercera posicion es :' + miArray[2] +'<br>')
document.write('El elemento de la ultima posicion es :' + miArray[miArray.length -1] +'<br>')
// Muestra el contenido del array en la consola
//document.write( '<ul>' +miArray+ '</ul>' );

document.write('El elemento de la segunda posicion es :'+ miArray[1] +'<br>')

miArray[1]= 'Barcelona';
document.write('<ul> <li>' +miArray+
   '</li></ul>')*/
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudades = [];

while (true) {
  let nombreCiudad = prompt('Ingrese una ciudad (o presione Cancelar para terminar):');
  if (!nombreCiudad) break;
  ciudades.push(nombreCiudad);
}

document.write(`La longitud del arreglo es: ${ ciudades.length }.<br />`);
document.write(`Los elementos de las posiciones primera, tercera y última son: ${ ciudades[0] }, ${ ciudades[2] }, ${ ciudades[ciudades.length - 1] }.<br />`);

ciudades.push('París');

document.write(`El elemento en la segunda posición es: ${ ciudades[1] }.<br />`);

ciudades[1] = 'Barcelona';

document.write(`El arreglo final es: [${ ciudades.join(', ') }]`);

// Explicación del código:

// 1. Creamos un arreglo vacío llamado`ciudades`.
// 2. Con un ciclo while, vamos pidiendo que el usuario nos ingrese una ciudad a la vez mediante un prompt, el cual se agrega al final del arreglo cada vez que el usuario ingresa un valor.
// 3. Si el usuario presiona cancelar, el ciclo while termina y se muestran los resultados indicados mediante las funciones `document.write` y algunos métodos del objeto `Array` como`length`, `push`, `join`, entre otros.