var readline = require("readline-sync");

var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));
var c;

if (b === 0) {
  console.log("KESALAHAN || Nilai b tidak boleh nol!");
  process.exit(1);
}

c = a / b;
console.log(`${a} / ${b} = ${c}`);
