var readline = require("readline-sync");

// Mendefinisikan kelas eksepsi
class DivisionByZeroError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    this.message = msg;
  }
  getMessage() {
    return this.message;
  }
}

var a = parseInt(readline.question("Masukkan nilai a: "));
var b = parseInt(readline.question("Masukkan nilai b: "));
var c = a / b;

try {
  if (b === 0) {
    throw new DivisionByZeroError(`
        Terjadi Kesalahan! Tidak boleh membagi angka dengan nol! 
        `);
  }
  console.log(`
  ${a} / ${b} = ${c}
  `);
} catch (msg) {
  console.log(msg.getMessage());
}
