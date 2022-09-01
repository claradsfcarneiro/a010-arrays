const numeros = [2, 6, 1999];
const strings = ["Clara", "Katia", "Evandro"];
const stringsNumerosEBooleanos = ["Clara","Katia", "Evandro", 23, 1999 + 23 === 2022];

console.log(`Quantidade de itens do primeiro array: ${numeros.length}`);
console.log(`Quantidade de itens do segundo array: ${strings.length}`);
console.log(`Quantidade de itens do terceiro array: ${stringsNumerosEBooleanos.length}`);
console.log(`Primeiro item do primeiro array: ${numeros[0]}`);
console.log(`Segundo item do segundo array: ${strings[1]}`);
console.log(`Terceiro item do terceiro array: ${stringsNumerosEBooleanos[2]}`);
console.log(`O número 1999 é um item do primeiro array? ${numeros.includes(1999)}`);
console.log(`A string "junho" é um item do terceiro array? ${stringsNumerosEBooleanos.includes("junho")}`);