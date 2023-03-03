var readline = require("readline-sync");

var n = parseInt(readline.question("Masukkan jumlah data: "));

var a = new Array();
var total = 0.0;
for (let i = 0; i < n; i++) {
  a[i] = parseFloat(readline.question(`Data ke-${i + 1}\t: `));
  total += a[i];
}

var rerata = total / a.length;

console.log(`
Isi array\t: [${a}]
Total Data\t: ${a.length}
Rerata\t: ${rerata}
`);
