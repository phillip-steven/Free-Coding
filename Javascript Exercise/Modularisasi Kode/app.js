const aritmatika = require("./aritmatika");
var readline = require("readline-sync");

const a = parseInt(readline.question("Masukkan nilai a: "));
const b = parseInt(readline.question("Masukkan nilai b: "));

console.log(
  `
   ${a} + ${b} = ${aritmatika.tambah(a, b)}
   ${a} - ${b} = ${aritmatika.kurang(a, b)}
   ${a} * ${b} = ${aritmatika.kali(a, b)}
   ${a} / ${b} = ${aritmatika.bagi(a, b)}
   `
);
