function tukar(a, b) {
  var c = a;
  a = b;
  b = c;
}

var x = 100,
  y = 200;

// Menampilkan nilai X dan Y sebelum ditukar
console.log(`Sebelum ditukar`);
console.log(`x: ${x}`);
console.log(`y: ${y}`);

// Memanggil fungsi tukar
console.log(`Setelah menjalankan fungsi tukar`);
console.log(`x: ${x}`);
console.log(`y: ${y}`);
