var readline = require("readline-sync");

while (true) {
  const username = readline.question("Username: ");
  const password = readline.question("Password: ");
  if (username !== "Javascript" || password !== "Node.js") {
    console.log("Username/password salah");
    continue;
  } else {
    console.log(`
        Selamat datang, login berhasil!`);
    break;
  }
}
