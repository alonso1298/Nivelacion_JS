// Clases 

// Podemos crear una clase y asignarla inmediatamente a una constante se conoce como una expresion de clase
// const Rectangulo = class R {

// }

// Esto es una declaracion de clase 
class Rectangulo { // Las clases declaradas con class no pueden tener Hoisting

}

// Hoisting es cuando tomamos variables cdefinidas con var y funciones definidas con function y las lleva al comienzo del archivo
console.log(Cuadrado);

function Cuadrado() {}

console.log(Cuadrado, Rectangulo);

const r = new Rectangulo();


console.log('---------------------------------------');


class Perro {
    propiedad = 'mi propiedad';
    #hambre; // Para crear propiedades privadas es con # seguido del nombre y tienen que ser definidos 
    static estatico = 42;
    constructor(estado='normal', hambre = false){ // Podemos asignar valores por defecto
        this.estado = estado;
        this.#hambre = hambre;
    }

    hablar() {
        console.log(`Soy un perro ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`);
    }
    // Los metodos estaticos son metodos que solo se pueden acceder dentro de la clase y no es necesario generar una nueva instancia de clase 
    static comer(){
        console.log(this.estatico,'estoy comiendo!');
    }
}

Perro.comer();
// Las clases que tienen un constructor se tienen que instanciar con la palabra reservada 
const feliz = new Perro('feliz');
// console.log(feliz.__proto__.hablar);
// feliz.hablar();
// console.log(feliz);
const triste = new Perro('triste');
// triste.hablar();
const nose = new Perro();
// nose.hablar();
