const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let indeks in data) {
  if (indeks % 2 === 0) continue;
  process.stdout.write(indeks + " ");
}
