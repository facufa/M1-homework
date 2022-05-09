'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  
  let arrayResult = [1];
  let i = 2;

  // let arrayResult = [];
  // let i = 1;

  while (num > 1) {
   if ( num % i === 0) {
    arrayResult.push(i);
    num = num/i;
   } else {
      i++;
   }
  }
  return arrayResult;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [11,6,7,5,8,10,45]
      
  let swap = true;                                  //habilita que haga cambios           
  while(swap) {                                     //mientras tengas la capacidad de hacer estos cambios hacelos
    swap = false;                                  //desabilita que haga cambios
    for (let i = 0; i < array.length; i++) {       //recorremos el array, -1 porque sabemos que en el ultimo elemento ya estan ordenamos los valores
     
      if( array[i] > array[i+1]) {                 // 11 > 6 // si esta condicion se cumple entra al while
        let aux = array[i];                       // guardo 11 en aux
        array[i] = array[i+1];                    // 
        array[i+1] = aux;                         // 6
        swap = true;                              //habilita que haga cambios;
      }   
    }
  }
  return array;
 }


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
   
  //   [9, 5, 1, 3, 4]
  //       i
  //    j           

  for (let i = 1; i < array.length; i++) {
    
    let j = i-1;
    let aux = array[i] //guardo el valor de la variable i  antes de entrar al while // 4
  
    while ( j>=0 && aux < array[j] ) {
        array[j+1] = array[j];  //suap, cambio de valor // 
        j--;
    }
    array[j+1] = aux; // 
  }
  return array;
  }

  // for (let i = 1; i < array.length; i++) {      //recorre el array empezando en la pocicion 1
  //   let j = i - 1;                              //es igual a array en i-1 
  //   let aux = array[i];                         //guardo la pocion del array en una variable auxiliar
  //   while (j >= 0 && array[j] > aux) {          //si j es igual o mayor a 0, y si j es mayor que aux hacemos el cambio entrando al codigo
  //       array[j+1] = array[j];                  //hacemos swap
  //      j--;                                 
  //   } 
  //   array[j+1] = aux;                      //en est eultimo paso pongo en el lugar correcto el i que itera
  // }                                         
  // return array;   


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //   [9, 5, 1, 3, 4]
  //    i
  //       j       

  for (let i = 0; i < array.length-1; i++) {
      let min = i;  //guarda la posicion del valor mas chico
      for (let j = i+1; j < array.length; j++) {
        if (array[min] > array[j]) {
          min = j;
        }        
      }

      if(i !== min) {
        let  aux = array[i];
        array[i] = array[min];
        array[min] = aux;
      }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
