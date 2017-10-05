do {
  var num = prompt("Ingresa el número de una tarjeta de crédito")//Ingreso el n° de una tarjeta
} while  (num === "")//si la condición es verdadera continuara aparciendo prompt.
function isValidCard(num) {
  var array = [];//creo un array vacio en donde contega los n° al inverso al n° que me entregan
  for (var i = 0; i < num.length; i++) {//con el metodo unshift empujo los n° al array vacio pero los ingresa como string así que uso el metodo parseInt
    array.unshift(parseInt(num.charAt(i)));//al parsear utilizo charAt ya que se debe ordenar sus posiciones cuando realiza el recorrido hasta que el ultimo n° queda en la posición 0
  }var arr2 = [];//creo otra variable vacia en donde se creara un array con los n° en posición pares para multiplica *2 y los n° de la posiciones impares
  for (var j = 0; j < array.length; j++){// realizamos el recorrido
  if (j%2!==0) {// en las posiciones pares se multiplia * 2
    arr2.push(array[j]*2);//empuja los n° en las posiciones pares y que fueron multiplicados*2 al newArray
  }else{
    arr2.push(array[j]);//empuja los n° en las posiciones impares al newArray
  }
}
var arr3 =[];
var joinNumbers = arr2.join("");//uni todo el arr2 y quedo como un sting
var splitJoinNumbers = joinNumbers.split(""); //el string lo necesito convertir en un arr, uso split
arr3 = splitJoinNumbers;
var sum = 0//contador
for (var m = 0; m < arr3.length; m++){
  sum+=(parseInt(arr3[m]));// voy sumando mi arr3 y como estaba en string lo debo pasar a number con parseInt
}
if (sum%10===0) { // si el residuo es igual a 0 es una tarjeta válida
  return alert ("Tarjeta Válida");
}else{
  return alert ("Tareje Invalida");// si no se cumple la 1° condición no es válida la tarjeta

}
  }
isValidCard(num);







/*function isValidCard(num) {
  var num = parseInt(prompt("Ingresa el número de una tarjeta de crédito"));
  var array = [];49927398716
  if (num){
    for(var i=0; i<num.length;i++){ // realiza el recorrido del n° de la tarjeta
      var arr2 = array.pop();//elimino el ultimo array y me devuelve un string
      array.splice(i,0,arr2);//me devuelve un array con los n° inversos.
      var par = (num%2 == 0)*2;// buscar la posición pares y los multiplica por dos
      if (par >= 10){// si el n° par es mayor o igual a 10 se debe sumar los digitos
        //averiguar como sumar los dos digitos
      }
      var impar = (num%2 == 1);//busca los impares
    }
  }
  else {
    alert("campo vacio");
  }

}*/
