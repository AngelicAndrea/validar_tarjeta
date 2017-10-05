## Pseudocodigo Tarjeta De Crédito:
##### Incio
#### Hacer 
+ Ingresar el número de la Tarjeta
##### (Condición)
+ Si la condición es verdadera osea, no anoto ningún número me seguira preguntado hasta dar una respuesta.
## FUNCIÓN isValidCard
###### _Se ejecuta la función cuando se ingresa el número de la tarjeta._
#### Se crea un array []; vació en donde se contenga los n° de la tarjeta de orden inverso.
Se realiza el For(); para realizar el recorrido de cada string hasta su largo.
Utilizo Unshift para empujar los n° al array vacio desde la primera posición así se hace con todos hasta que el último n° queda en la primera posición. También los parseo (los convierto en number). Con el charAt(); lo utilizo para ver la posción de cada n° que paso al array vacio.
#### Se crea una segunda array vacio para ingresar las posiciones pares que fueron multiplicado *2 y los impares 
Se realiza el For(); para realizar el recorrido del primer array.
**if** (las posiciones pares se debe multiplicar *2) Se ingresa al array2 las posiciones pares multiplicado *2 el n° de esa posición.
**else** si no se cumple la primera opción son las posiciones impares que se empujan también al array2 pero sin *2.
#### Se crea un tercer array vacio.
con el segundo array están los n° mayores o iguales a 10 se les debe sumar sus digitos para eso se debe unir todo y al usar join lo convierte en un string usando split devuelve un arreglo y deja los digitos separados ["1","2","8","9"] pero aun son string.
#### Sumar los digitos, como son string se les debe parsear, pasar a number.
**if** (si el residuo es igual a 0 es una tarjeta válida)
aparece un alerta de "tarjeta Válida" respetando el algoritmo de Luhn
**else** si el residuo es más de 0 
alerta una "Tarjeta invalida"
![](https://ibb.co/hNVUrG)