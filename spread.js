// Spread operator

const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3]

// El Spread Operator (...) nos permite poder tomar valores que se encuentren dentro de un arreglo u objeto y exparsirlos 
fn(...arr);

console.log('---------------------------------------');

const arr1 = [5, 6];

const arr2 = arr.concat(arr1); // Podemos concatenar diferentes arreglos para obtener un arreglo nuevo
const arr3 = [...arr, ...arr1]; // Tambien podemos utilizar spread operator para concatenar
console.log(arr2);
console.log(arr3);

console.log('---------------------------------------');

// Tambien podemos agregar elementos 
const arr4 = [...arr, 2, 3]; // Estas unicamente son copias ya que si posteriormente agregamos nuevos elementos a arr no se vera afectado
console.log(arr4);