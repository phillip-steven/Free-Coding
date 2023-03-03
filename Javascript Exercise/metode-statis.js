var readline = require("readline-sync");

class Segitiga {
  constructor(a, t) {
    this.alas = a;
    this.tinggi = t;
  }
  luas() {
    return (this.alas * this.tinggi) / 2;
  }
  //   Metode statis
  static buatObjek(a, t) {
    return new Segitiga(a, t);
  }
}

// Membaca data alas dan tinggi
const a = parseFloat(readline.question("Masukkan nilai alas: "));
const t = parseFloat(readline.question("Masukkan nilai alas: "));

// Memanggil metode statis
var obj = Segitiga.buatObjek(a, t);

console.log(`
    obj.alas\t: ${obj.alas}
    obj.tinggi\t: ${obj.tinggi}
    obj.luas()\t: ${obj.luas()}
`);
