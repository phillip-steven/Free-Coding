function sum(...a) {
  var total = 0;
  for (let elemen of a) {
    total += elemen;
  }
  return total;
}

// Memanggil fungsi dengan 5 argumen
console.log(`sum(10, 20, 30, 40, 50): ` + sum(10, 20, 30, 40, 50));
