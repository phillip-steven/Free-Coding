var readline = require("readline-sync");

// Fungsi tambah
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

function hitung(callback) {
  return callback(a, b);
}
var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));
console.log(`${a} + ${b} = ${hitung(tambah)}`);
console.log(`${a} - ${b} = ${hitung(kurang)}`);
console.log(`${a} x ${b} = ${hitung(kali)}`);
console.log(`${a} / ${b} = ${hitung(bagi)}`);
