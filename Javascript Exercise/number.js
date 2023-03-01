var readline = require("readline-sync");

const PI = 3.1415926535899793;

var radius;
var luas, keliling;

radius = parseFloat(readline.question("Masukkan jari-jari lingkaran: "));

luas = parseFloat(PI * radius * radius);
keliling = parseFloat(2 * PI * radius);

console.log("Luas lingkaran\t\t: " + luas);
console.log("Keliling lingkaran\t\t: " + keliling);
