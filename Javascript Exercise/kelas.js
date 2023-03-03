var readline = require("readline-sync");

class Segitiga {
  constructor(a, t) {
    this.alas = a;
    this.tinggi = t;
  }
  luas() {
    return (this.alas * this.tinggi) / 2;
  }
}

// Membaca data alas dan tinggi
const a = parseFloat(readline.question("Masukkan nilai alas: "));
const t = parseFloat(readline.question("Masukkan nilai tinggi: "));

// Membuat objek dari kelas segitiga
const obj = new Segitiga(a, t);

console.log(`
    obj.alas\t: ${obj.alas}
    obj.tinggi\t: ${obj.tinggi}
    obj.luas()\t: ${obj.luas()}
`);
