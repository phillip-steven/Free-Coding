var readline = require("readline-sync");

class Aritmatika {
  static tambah(a, b) {
    return a + b;
  }
  static kurang(a, b) {
    return a - b;
  }
  static kali(a, b) {
    return a * b;
  }
  static bagi(a, b) {
    return a / b;
  }
  static sisaBagi(a, b) {
    return a % b;
  }
  static pangkat(a, b) {
    return a ** b;
  }
}

// Membaca data a dan b
const a = parseInt(readline.question("Masukkan nilai a: "));
const b = parseInt(readline.question("Masukkan nilai b: "));

console.log(`
    ${a} + ${b} = ${Aritmatika.tambah(a, b)}
    ${a} - ${b} = ${Aritmatika.kurang(a, b)}
    ${a} * ${b} = ${Aritmatika.kali(a, b)}
    ${a} / ${b} = ${Aritmatika.bagi(a, b)}
    ${a} % ${b} = ${Aritmatika.sisaBagi(a, b)}
    ${a} ** ${b} = ${Aritmatika.pangkat(a, b)}
`);
