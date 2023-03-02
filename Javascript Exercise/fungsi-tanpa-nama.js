var readline = require("readline-sync");

var tambah = function (a, b) {
  return a + b;
};

var a = parseInt(readline.question("Masukkan nilai A: "));
var b = parseInt(readline.question("Masukkan nilai B: "));

var hasil = tambah(a, b);

console.log(`${a} + ${b} = ${hasil}`);
