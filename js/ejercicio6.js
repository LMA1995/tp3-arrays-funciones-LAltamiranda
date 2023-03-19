//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.La fórmula del perímetro  es p = 2*(a +b)

function calculoPerimetro(base , altura)
{
    let perimetro= 2*(base+altura)
    return document.write('El perimetro es: '+perimetro)
}
let base= parseFloat(prompt('Eingrese el valor de la base'));
let altura= parseFloat(prompt('Ingrese el valor de la altura'));

calculoPerimetro(base,altura)

