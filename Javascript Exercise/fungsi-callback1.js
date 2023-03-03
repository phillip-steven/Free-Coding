var readline = require("readline-sync");

function hitung(a, b, callback) {
  return callback(a, b);
}

var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));

// Using arrow function
console.log(
  `Tambah: ${a} + ${b} = ${hitung(a, b, (a, b) => {
    return a + b;
  })}`
);

// Using no name function
console.log(
  `Kurang: ${a} - ${b} = ` +
    hitung(a, b, function () {
      return a - b;
    })
);

console.log(
  `Kali: ${a} * ${b} = ${hitung(a, b, (a, b) => {
    return a * b;
  })}`
);

console.log(
  `Bagi: ${a} / ${b} = ${hitung(a, b, (a, b) => {
    return a / b;
  })}`
);
