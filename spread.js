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

console.log('---------------------------------------');

// El spread operatos tambien sirve con objetos 

const obj1 = { a: 1, b: 2};
const obj2 = { b: 5, c: 'Gatito Feliz'};

//Generamos una copia del obj1
const obj3 = { ...obj1 };
//Si modificamos obj1 no se vera reflejado en el obj3 ya que generamos una copia
// obj1.a = 10
console.log(obj3, obj1);

console.log('---------------------------------------');

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

console.log('---------------------------------------');

const obj5 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        animal: 'gatito'
    }
}

console.log(obj5);