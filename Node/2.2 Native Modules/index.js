const fs = require("fs");

// Create and write a file
/*fs.writeFile("message.txt", "Hola, texto de prueba", (err) => {
  if (err) throw err;
  console.log("the file has been saved");
});*/

// Read a file
fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
