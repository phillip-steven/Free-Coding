var readline = require("readline-sync");

class Segitiga {
  constructor(a, t) {
    // Mendefinisikan properti
    this.alas = a;
    this.tinggi = t;
  }
  luas() {
    return (this.alas * this.tinggi) / 2;
  }
  cetakProperti() {
    console.log(`
    alas\t: ${this.alas}
    tinggi\t: ${this.tinggi}
    luas()\t : ${this.luas()}
    `);
  }
}

class SegitigaWarna extends Segitiga {
  constructor(a, t, w) {
    super(a, t); //Memanggil konstruktor segitiga
    // Mendefinisikan properti baru
    this.warna = w;
  }
  cetakProperti() {
    super.cetakProperti();
    console.log(`
    warna\t: ${this.warna}
    `);
  }
}

// Membaca data alas dan tinggi
const a = parseInt(readline.question("Masukkan nilai alas: "));
const t = parseInt(readline.question("Masukkan nilai tinggi: "));

var obj = new SegitigaWarna(a, t, "Hitam");

obj.cetakProperti();

// Memanggil metode luas()
