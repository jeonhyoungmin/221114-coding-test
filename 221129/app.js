const http = require("http");
const fs = require("fs");

const textRead = (file) => {
  let text = fs.readFileSync(file, (err) => {
    if (err) throw err;
  });
  let textString = text.toString();
  return textString;
};

const textWrite = (fileName, data = "") => {
  fs.writeFileSync(
    fileName,
    head + "\n" + header + "\n" + data + "\n" + aside + "\n" + footer
  );
};

let head = textRead("./txtFiles/head.txt");
let header = textRead("./txtFiles/header.txt");
let aside = textRead("./txtFiles/aside.txt");
let footer = textRead("./txtFiles/footer.txt");
let main = textRead("./txtFiles/main.txt");

http
  .createServer((req, res) => {
    const staticRouteTxt = (mainData, statuscode, contentType) => {
      textWrite("index.txt", mainData);
      let data = textRead("./index.txt");
      res.writeHead(statuscode, { "Content-Type": contentType });
      res.write(data);
      res.end();
    };

    const staticRoute = (filename, statuscode, contentType) => {
      let data = fs.readFileSync(filename, (err) => {
        if (err) throw err;
      });
      res.writeHead(statuscode, { "Content-Type": contentType });
      res.write(data);
      res.end();
    };

    if (req.method === "GET") {
      let url = req.url;
      console.log(url);
      switch (url) {
        case "/":
          staticRouteTxt(main, 200, "text/html; charset=utf-8");
          break;
        case "/home":
          let preCss = fs.readFileSync("./style.css");
          fs.writeFileSync(
            "./style.css",
            preCss + "main {background-color:red}",
            "utf-8"
          );
          staticRouteTxt("<main>home</main>", 200, "text/html; charset=utf-8");
          break;
        case "/my":
          staticRouteTxt("<main>my</main>", 200, "text/html; charset=utf-8");
          break;
        case "/menu":
          staticRouteTxt("<main>menu</main>", 200, "text/html; charset=utf-8");
          break;
        case "/item":
          staticRouteTxt("<main>item</main>", 200, "text/html; charset=utf-8");
          break;
        case "/style.css":
          staticRoute("./style.css", 200, "text/css; charset=utf-8");
          break;
        case "/test.js":
          staticRoute("./test.js", 200, "text/javascript; charset=utf-8");
          break;
      }
    }

    // if (req.method === "POST") {
    //   let url = req.url;
    //   if (url === "/home") {
    //     let body = "";
    //     req.on("data", (data) => {
    //       body = decodeURI(data);
    //     });
    //     req.on("end", () => {
    //       body = JSON.parse(body);
    //       body = body.mainData;
    //       console.log(body);
    //     });
    //     staticRouteTxt(`<main>${body}</main>`, 200, "text/html; charset=utf-8");
    //   }
    // }
  })
  .listen(5678, () => {
    console.log("5678포트에서 서버 가동 중");
  });
