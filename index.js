// const fs = require("fs");
// const app = require("./app");

// fs.writeFileSync("demo.txt", "this is the first file.");

// const friend = app.friends.filter((item) => item === "kaushik");
// console.log(friend);

// for (let index = 0; index < 10; index++) {
//   fs.writeFileSync(`demo${index}.txt`, `this is the ${index} file.`);
// }
const http = require("http");

const server = http
  .createServer((req, res) => {
    res.write("hello this is the");
    res.end();
  })
  .listen(3000);
