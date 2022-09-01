const numeros = [2, 6, 1999];
const strings = ["Clara", "Katia", "Evandro"];
const stringsNumerosEBooleanos = ["Clara","Katia", "Evandro", 23, 1999 + 23 === 2022];

numerosCopia = numeros;
stringsCopia = strings;
stringsNumerosEBooleanosCopia = stringsNumerosEBooleanos;

console.log(`Primeiro array: ${numeros}`);
numerosCopia.push(23);
console.log(`Versão modificada da cópia do primeiro array: ${numerosCopia}`);

console.log(`Segundo array: ${strings}`);
stringsCopia.pop(stringsCopia);
console.log(`Versão modificada da cópia do segundo array: ${stringsCopia}`);

console.log(`Terceiro array ${stringsNumerosEBooleanos}`);
stringsNumerosEBooleanosCopia.splice(1, 1);
console.log(`Versão modificada da cópia do terceiro array: ${stringsNumerosEBooleanosCopia}`)