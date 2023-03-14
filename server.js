const _cal = require("./calculator");
const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/") {
      fs.readFile("index.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (parsedUrl.pathname === "/calculate") {
      const query = parsedUrl.query;
      const num1 = parseFloat(query.num1);
      const num2 = parseFloat(query.num2);
      const operator = query.operator;
      let result = 0;

      switch (operator) {
        case "sum":
          result = _cal.isSum(num1, num2);
          break;
        case "subtract":
          result = _cal.isSub(num1, num2);
          break;
        case "multiply":
          result = _cal.isMul(num1, num2);
          break;
        case "divide":
          result = _cal.isDiv(num1, num2);
          break;
        default:
          result = "Invalid operator";
          break;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        `<p style="text-align: center; font-size: 25px;">Result: ${result.toFixed(
          2
        )}</p>`
      ); 
      return res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Not Found");
      return res.end();
    }
  })
  .listen(8000);
