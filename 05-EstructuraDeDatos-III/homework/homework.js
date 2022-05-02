'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) {
  this.value = value;   //puede ser lo que querramos.
  this.left = null;
  this.right = null;
}

let binaryTree = new BinarySearchTree();       //intancias para crear un nuevo NODO
/*
let binaryTree = new BinarySearchTree(5);           //invocacion

binaryTree {
  value: 5,
  left: null,
  right: 6{value:6,left:null,right:null}, 

*/
BinarySearchTree.prototype.insert = function(value)	{           // binaryTree.insert() para agrarle valores en left o right a los nodos que vamos crando.
//  binaryTree.inser(6) esto lo tiene que guardar en right. 
// binaryTree.inser(7)
if (value > this.value) {                                      //this.value (binaryTree) = valor que ponemos en binaryTree. value= es el parametro que le pasemos al invocar binaryTree.insert.
  if (this.right === null) {                                   //si this.right esta vacio ingresa.  
    this.right = new BinarySearchTree(value);
  } else {
    this.right.insert(value);                                 //si en this.right hay algo, invocar otra vez la funcion con el lado right para pasar y posicionarme en el siguiente this.right
  }
} 
else if (value < this.value) {
    if(this.left === null) {                                  //si this.left esta vacio ingresa.
      this.left = new BinarySearchTree(value);                //inserta un nuevo BinarySearchTree a this.left
    } else {
      this.left.insert(value);                                //reinvoca la funcion al siguente this.left
    }
}                                                                                        
};  


//binaryTree.inset(7);

BinarySearchTree.prototype.contains = function(value){
  // binaryTree.contais(6) Este metodo pregunta si el Arbol contiene el valor ingresado (true / false)
  
  if(value === this.value) return true;
//      6         5
  if (value > this.value) {
    //buscar en la derecha
    if(this.right?.contains(value)) return true;
   // if (this.right === null) return false;         //si en this.right no hay nada false
  // else return this.right.contains(value);        //invoca la misma funcion tomando el siguiente righy
  };

  if(value < this.value) {
    //buscar en la izquierda                     //el valor recibio con el metodo contais() es menor al que ya tenemos en value binaryTree?
    if(this.left?.contains(value)) return true;
    //if (this.left === null) return false;        //si en this.left no hay bada retorna false
    //else return this.left.contains(value);       //invoca la siguiente funcion tomando el siguiente left
  };
  return false;
};

/*

OTRA FORMA

if (value === this.value) return true;

if(this.lefh?.contains(value)) return true;     //si this.left existe y tiene el valor pasado retornar true
if(this.right?.contains(value)) return true;

return false;

*/


BinarySearchTree.prototype.size = function()	{                            //contar la cantidad de nodos que tengo en total  
  if (this.left === null && this.right === null) return 1;                     //si this.left esta vacio y si en this.right esta vacio. igual a 1 solo nodo.
  // {value:5, this.left:null, this,right:null}
  if (this.left !== null && this.right === null) return 1 + this.left.size();   //si this.left es disitnto de null y this.right esta vacio. retornar 1 + todo lo que hay en left
  if (this.right !== null && this.left === null) return 1 + this.right.size();  // si this.right es disnto de null y en this.left esta vacio. retornar 1 mas la cantidad de todos los nodos que hay a la derecha (right)
  if (this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
  // si en ambos lados (left y right) hay nodos sumarlos y devolver la cantidad total.

  // binaryTree.size() invocacion que se pregunta los if de arriba

  /*

  let count = 0;
  
  if(this.left) count = count + this.left.size();
  if(this.right) count = count + this.right.size();

  return count;

  */
};


BinarySearchTree.prototype.depthFirstForEach = function(cb, order){ //ordena los nodos de acuerdo al order que le pasemos:
  //order= pre-order 
  //order= in-order  
  //order= post-order

  if (order === 'pre-order') {
    //raiz - izquierda - derecha (arriba > abajo)
    cb(this.value);    //console.log(this.value)
    if(this.left) this.left.depthFirstForEach(cb, order);  //si en this.left hay un elemento invocarlo en el orden que reciba como parametro la funcion
    if(this.right) this.right.depthFirstForEach(cb, order);

    //depthFirstForEach(cb, 'pre order')
    // raiz - izq - der
  }
  else if (order === 'post-order') {
    //izquierda - derecha - raiz (abajo > arriba)
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
  else {    //si no le pasamos nada por defecto lo ordena.
    //izquierda - raiz - derecha (abajo > arriba)
    if (this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, order);
  };
};

/*

OTRA FORMA CON SWITCH

  switch(order) {
      case 'in-order' = {
        this.left?.depthFirstForEach(cb, order)
        cb(this.value)
      	this.right?.depthFirstForEach(cb, order)
      	break;
      };
      case 'post-order' = {
        this.left?.depthFirstForEach(cb, order)
        this.right?.depthFirstForEach(cb, order)
  			cb(this.value)
  			break;
      };
      case 'pre-order' = {
      	cb(this.value)
        this.left?.depthFirstForEach(cb, order)
        this.right?.depthFirstForEach(cb, order)
				break;
      };
  };
}:

*/

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){ //leyendo los nodos del arbol por niveles por niveles
  
 cb(this.value);                 //ejecuta la funcion con tu valor raiz (root)  = A
  
  if (this.left) array.push(this.left);     //tenes algo a la izquierda? //agrego (push) el valor de left al array. [B]
  
  if (this.right) array.push(this.right);    //si en right hay algo    //agrego el valor de right al array [C]
    
  if (array.length > 0) {                           // si el array es mayor a 0? si porque tiene [B,C], entonces entra el codigo. si hay algo en el array
    array.shift().breadthFirstForEach(cb. array);   //quita el primer elemento del array  y reejecuta la funcion con  el array ya modificado (sin B) y agregado al array lo que contiene B (C,D)
    
    /*  (A B)
      [C,D,E]
    */
  }
};

/*tomo A y antes de ejecurtarlo guardo B y C en un array. y ejecuto A

cb(A)
[B,C]

tomo B y antes de ejecutarlo guardo el D y E en el array. y ejecuto B

cb(A B)
[C,D,E]

tomo C y antes de ejecutarlo guardo F y G en el array. y ejecuto B

cb(A B C)
[D,E,F,G]

          A
      B       C
    D   E   F   G

*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
