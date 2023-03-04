// Making array
var a = {
  http: "Hypertext Transfer Protocol",
  html: "Hypertext Markup Languange",
  xml: "Extensible Markup Languange",
  json: "Javascript Object Notation",
};

for (key in a) {
  console.log(key.toUpperCase() + `\t = ${a[key]}`);
}
