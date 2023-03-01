var readline = require("readline-sync");

function kali(a, b) {
  return a * b;
}

var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));
var c = kali(a, b);

console.log(`${a} x ${b} = ${c}`);
