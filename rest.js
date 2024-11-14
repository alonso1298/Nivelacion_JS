// rest operator toma todos los argmentos que le pasamos a la funcion y los transformamos en un arreglo este siempre tiene que ir al final
const rest = (a, ...argumentos) => {
    console.log(a);
    console.log(argumentos);
}

rest(1, 2, 3); // Imprime 1 [2, 3]

console.log('---------------------------------------');

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

// objet distrocturing puedes solicitarle al objetos que propiedades quieres de el 
// Podemos utulizar el rest operator para obtener todas las otras propiedades del objeto pero por serparado
const { a, b, ...restobj } = obj;
console.log(a, b, restobj);

console.log('---------------------------------------');

// Se puede hacer destructuring en los arreglos 
const arr = [1, 2, 3, 4, 5];

const [j, k, ...r] = arr;
// console.log(j, k, r);

const useState = () => ['valor', () => {}];

const [valor, setValor] = useState()
console.log(valor, setValor);
