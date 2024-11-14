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

// Se puede utilizar con HTML

const mapped2 = arr.map((i) => `<h1>${i}</h1>`);
console.log(mapped2);

const users = [
    { id: 1, name: 'Perro Feliz' },
    { id: 2, name: 'Gatito Feliz' },
    { id: 3, name: 'Hombre Feliz' },
    { id: 4, name: 'Pajaro Feliz' },
]

const mapped3 = users.map((user) => `<h1>${user.name}</h1>`);
console.log(mapped3);


console.log('---------------------------------------');

// Reduce toma todos los elementos de un arreglo y podremos devolver lo que queramos como sumar todos los elementos de un arreglo

// Recibe 2 parametros, el acumulador que son todos lo valores acumulados y el elemento que estamos iterando 
const r1 = arr.reduce((acc, el) => acc + el, 0); // 0 es el valor inicial del acumulador
console.log(r1);

const getMax = (a, b) => Math.max(a, b);
const r2 = arr.reduce(getMax);
console.log(r2);

const r3 = users.reduce((acc, i) =>
    `${acc === '' ? '' : `${acc}, `}${i.name}`, '');
console.log(r3);


const r4 = users.reduce((acc, i) => {
    if (i.id < 2) {
        return acc; 
    }
    return acc.concat(i);
}, []);

console.log(r4);




