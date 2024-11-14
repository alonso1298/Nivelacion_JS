const arr = [5, 1, 2, 3, 4];

// Metodo filter 
const r = arr.filter((el, i) => {
    console.log(i);
    return el > 2
});
console.log(r);