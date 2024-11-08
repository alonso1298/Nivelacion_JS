const gatitosFelices = ['gatito 1', 'gatito 2', 'gatito 3'];
// Se exporta la constante
export const gatitosTristes = ['triste 1', 'triste 2'];
export const otrosGatos = ['gato 1', 'triste 2'];

const fn1 = () => {
    console.log('soy la funcion uno');
}

function fn2() {
    console.log('soy la funcion dos');
}

// Podemos exportarlos despues de declarar las variables, constantes o funciones
export { fn1, fn2 }

//Exporta algo por defecto 
export default gatitosFelices;