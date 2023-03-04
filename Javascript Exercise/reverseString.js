var readline = require("readline-sync");

function reverseString(str) {
  var reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

var a = readline.question("Masukkan string yang ingin dibalik: ");

console.log(`
    String sebelum dibalik\t: ${a}
    String setelah dibalil\t: ${reverseString(a)}
    String setelah diUpperCase\t: ${reverseString(a).toUpperCase()}
    String setelah diLowerCase\t: ${reverseString(a).toLowerCase()}
`);
