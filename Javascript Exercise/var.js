var globalVar = 100;

function f() {
  let localVar = 200;

  console.log("Memanggil variabel dalam fungsi");
  console.log("globalVar: " + globalVar);
  console.log("localVar: " + localVar);
}

f();
