//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
function informacionTexto(texto)
{
  
    if(texto === texto.toUpperCase())
    {
       document.write('La cadena de texto ingresada esta compuesta solo por letras mayusculas :' +texto);
    }
    else if (texto === texto.toLowerCase())
    {
       document.write('La cadena de texto ingresada solo esta compuesta por letras minusculas : '+texto)
    }
    else
    {
       document.write('La cadena de texto ingresada tiene una combinacion de mayusculas y minusculas :'+texto)
    }
    return
}
var texto=prompt('Ingrese una cadena de texto');
informacionTexto(texto);