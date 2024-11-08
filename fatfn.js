// Arrow functions

// Funciones que se declaran con la palabra reservada function , ademas de ser funciones son clases basadas en prototipos 
function Fn() { // Las funciones en JS tienen un contexto de this 
    // Podemos crar una nueva propiedad
    this.prop = 'Propiedad'
    // Se ignora completamente el retunr y retorna de forma implicita es this
    return 'Puerquito feliz';
}

Fn.prototype.lala = function FuncionDePrototipo() {}

//Al llamar una funcion con la palabra reservada de new, se crea un objetoliteral del aire 
const r = new Fn(); // Podemos llamar a las funciones en JS con la palabra reservada new y esto creara una nueva instancia 
// Podemos acceder al prototipe utilizando la propiedad de __proto__
console.log(r.__proto__);

console.log('---------------------------------------');

// fat arrow function

// Se definen creando una variable
const fatFn = () => { // No tienen contexto de this
    const obj = {};
    obj.prop = 'Propiedad';
    return obj;
}

// Las fat arrow function no pueden ser llamadas con la palabra reservada de new
// const r1 = new fatFn();

const r1 = fatFn();
console.log(r1);

console.log('---------------------------------------');

// Return Implicito
const fnR = () => 2

console.log(fnR());