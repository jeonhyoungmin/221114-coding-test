const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  const url = req.url;
  const staticRoute = (fileName, statusCode, contentType) => {
    let data = fs.readFileSync(fileName);

    res.writeHead(statusCode, { "Content-Type": contentType });
    res.write(data);
    res.end();
  };

  if (req.method === "GET") {
    if (url === "/") {
      staticRoute("./index.html", 200, "text/html; charset=utf-8");
    } else if (url === "/control.js") {
      staticRoute("./control.js", 200, "text/javascript");
    }
  }

  if (req.method === "POST") {
    if (url === "/date") {
      console.log(url);
      let date = "";
      req.on("data", (data) => {
        date += decodeURI(data);
      });
      req.on("end", () => {
        console.log(date);
        const title = date.split("=")[1].split("-");
        const value = date.split("=")[1];
        let object = {
          date: value,
          hello: "world",
        };
        object = JSON.stringify(object);
        fs.writeFileSync(`./date/${title[0]}-${title[1]}.json`, object);

        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("성공");
      });
    }
  }
});

server.listen(5500, () => {
  console.log("server on");
});
