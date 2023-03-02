function sum(a) {
  if (!typeof a === "Array") {
    console.log("Nilai yang dimasukkan harus berbentuk array!");
    return;
  }
  var total = 0;
  for (let element of a) {
    total += element;
  }
  return total;
}

// Parameter berupa array dengan 19 elemen
console.log(
  `sum[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
11, 12, 13, 14, 15, 16, 17, 18, 19] : ` +
    sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
);
