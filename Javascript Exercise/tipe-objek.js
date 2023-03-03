// Membuat tipe objek
function Segitiga(a, t) {
  this.alas = a;
  this.tinggi = t;
}

Segitiga.prototype.luas = function () {
  return (this.alas * this.tinggi) / 2;
};

// Membuat objek dari tipe segitiga
var obj = new Segitiga(4, 5);

console.log(`
    Sebelum nilai properti dirubah:
    obj.alas\t: ${obj.alas}
    obj.tinggi\t: ${obj.tinggi}
    obj.luas()\t: ${obj.luas()}    
`);

// Mengubah nilai properti alas dan tinggi

obj.alas = 10;
obj.tinggi = 8;

// Menampilkan nilai yang sudah dirubah
console.log(`
    obj.alas\t: ${obj.alas}
    obj.tinggi\t: ${obj.tinggi}
    obj.luas()\t: ${obj.luas()}
`);
