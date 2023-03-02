function cetak(s, n = 3, newLine = true) {
  for (let i = 0; i < n; i++) {
    process.stdout.write(s);
    if (newLine) process.stdout.write("\n");
  }
}

// Memanggil fungsi cetak() dengan satu parameter
console.log(`Memanggil fungsi cetak dengan satu parameter`);
cetak("Javascript");

// Memanggil fungsi cetak() dengan dua parameter
console.log(`Memanggil fungsi cetak dengan dua parameter`);
cetak("Javascript", 2);

// Memanggil fungsi cetak() dengan tiga parameter
console.log(`Memanggil fungsi cetak dengan tiga parameter`);
cetak("Birulangit", 3, true);
cetak("Photography", 3, true);
