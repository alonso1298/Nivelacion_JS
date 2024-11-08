// Entendiendo var, let y const

//Tanto var como let se pueden reescribir
// Var lleva la inicialización de la variable al inicio, no importa donde se declare esta puede ser llamada antes o despues
var miVariable = 'variable';
miVariable = 'variable actualizado';

// La variable let unicamente puede ser llamada despues de que se creo 
let variable = 'variable creada con let';
variable = 'variable creada con let actualizado';

//Const no se puede reescribir 
const constante = 'este valor es constante';

console.log(variable);