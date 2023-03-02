function increment(a) {
  a.x += 1;
}

// Membuat objek
var obj = new Object();
// Mendefinisikan properti x pada objek yang telah dibuat
obj.x = 10;

// Menampilkan nilai obj.x sebelum dinaikkan
console.log(`Sebelum dinaikkan`);
console.log(`obj.x : ${obj.x}`);

// Memanggil fungsi increment
increment(obj);

// Menampilkan nilai obj.x setelah dinaikkan
console.log(`\nSetelah dinaikkan nilainya`);
console.log(`obj.x : ${obj.x}`);
