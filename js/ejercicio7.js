//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
function mostrarTabla() {
    var numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
  
    if (isNaN(numero)) {
      document.write("Error: Debe ingresar un número válido.");
      return;
    }
  
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      ('<ul>')
      document.write('<li>' +numero + " x " + i + " = " + resultado + '</li>');
      ('</ul>')
    }
  }
  
  mostrarTabla();
  