var barang = [
  ["B001", "Spidol", 8500],
  ["B002", "Penaaaa", 6000],
  ["B003", "Pensil", 5500],
  ["B004", "Penghapus", 4000],
];

console.log(`KODE \t NAMA BARANG \t HARGA`);
console.log(`---- \t ----------- \t -----`);

for (let i = 0; i < barang.length; i++) {
  for (let j = 0; j < barang[i].length; j++) {
    process.stdout.write(barang[i][j].toString());
    if (j < barang[i].length - 1) {
      process.stdout.write(" \t ");
    }
  }
  console.log();
}
