var readline = require("readline-sync");
function kali(a, b) {
  return (c = a * b);
}

var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));

// Memanggil fungsi
hasil = kali(a, b);

console.log(`${a} X ${b} = ${hasil}`);
