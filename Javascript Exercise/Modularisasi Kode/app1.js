import { tambah, kurang, kali, bagi } from "aritmatika1.js";
var readline = require("readline-sync");

const a = parseInt(readline.question("Masukkan nilai a: "));
const b = parseInt(readline.question("Masukkan nilai b: "));

console.log(`${a} + ${b} = ` + tambah(a, b));
