const http = require("http");
const path = require("path");
const fs = require("fs");
const { StringDecoder } = require("node:string_decoder");
const decoder = new StringDecoder("utf-8");

const textRead = (file) => {
  let text = fs.readFileSync(file, (encodeURI = "utf8"));
  let textString = text.toString();
  return textString;
};

let head = textRead("./txtFiles/head.txt");
let header = textRead("./txtFiles/header.txt");
let main = textRead("./txtFiles/main.txt");
let footer = textRead("./txtFiles/footer.txt");

const textWrite = (fileName, data = "") => {
  fs.writeFileSync(
    fileName,
    head + "\n" + header + "\n" + main + "\n" + data + "\n" + footer,
    (encodeURI = "utf8")
  );
};

http
  .createServer((req, res) => {
    let url = req.url;
    if (req.method === "GET") {
      if (url === "/") {
        // let body = textRead("./txtFiles/body.txt");
        textWrite("html.txt", "안녕");
        let data = textRead("./html.txt");

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(data);
        res.end();
      }
    }

    if (req.method === "POST") {
      if (url === "/name") {
        let body = [];
        req.on("data", function (data) {
          body += decodeURI(data);
        });
        req.on("end", function () {
          body = body.split("=")[1];
          textWrite("html.txt", body);
          let data = textRead("./html.txt");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.write(data);
          res.end();
        });
      }
    }
  })
  .listen(5679, () => {
    console.log("5678포트에서 서버 가동 중");
  });
