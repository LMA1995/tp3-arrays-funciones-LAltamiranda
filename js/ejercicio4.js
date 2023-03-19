//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


function primerFuncion (num){
   
   
    let resultado= num % 2;
    if(resultado==0)
    {
        return document.write('El numero: ' + num +  ' es par')
    }
    else
    {
       return document.write('El numero: ' + num + ' es impar');
    }
}
let num= parseInt(prompt('Ingrese un numero'))


primerFuncion(num);