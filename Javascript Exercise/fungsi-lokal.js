var readline = require("readline-sync");

function hypotenuse(a, b) {
  function kuadrat(x) {
    return x * x;
  }
  // Memanggil fungsi lokal(kuadrat)
  return Math.sqrt(kuadrat(a) + kuadrat(b));
}

console.log(`Menghitung sisi miring segitiga`);
var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));

console.log(`Alas : ${a}
Tinggi : ${b}
Sisi miring : ${hypotenuse(a, b)}`);
