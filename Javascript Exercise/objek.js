// Membuat objek segitiga
const obj = {
  alas: 4,
  tinggi: 5,
  luas: function () {
    return (this.alas * this.tinggi) / 2;
  },
};

console.log(`
    Sebelum nilai properti diubah
    alas.obj\t: ${obj.alas}
    tinggi.obj\t: ${obj.tinggi}
    luas.obj()\t: ${obj.luas()}
`);

// Mengubah nilai properti
obj.alas = 10;
obj.tinggi = 8;
console.log(`
    Setelah nilai properti diubah
    obj.alas\t: ${obj.alas}
    obj.tinggi\t: ${obj.tinggi}
    obj.luas()\t: ${obj.luas()}
`);
