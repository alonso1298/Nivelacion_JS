const arr = [5, 1, 2, 3, 4];

// Metodo filter 
// Se puede pasar mas de un argumento en este caso seria el: el valor de los indices e i: el indice
const r = arr.filter((el, i) => {
    console.log(i); // Imprime todos los indices
    return el > 2 // Nos retorna un arreglo solo con los numeros que sean mayor a 2
});
console.log(r);

console.log('---------------------------------------');

// Map toma todos lo elementos que se encunetran dentro de una arreglo y les aplica una función ty te devuelve todos los elementos de una rreglo pero con una función aplicada

const mapped = arr.map((el) => el * 2);
console.log(mapped);

console.log('---------------------------------------');

// Se puede utilizar con HTML

const mapped2 = arr.map((i) => `<h1>${i}</h1>`);
console.log(mapped2);

console.log('---------------------------------------');

const users = [
    { id: 1, name: 'Perro Feliz' },
    { id: 2, name: 'Gatito Feliz' },
    { id: 3, name: 'Hombre Feliz' },
    { id: 4, name: 'Pajaro Feliz' },
]

const mapped3 = users.map((user) => `<h1>${user.name}</h1>`);
console.log(mapped3);


