const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  }
  if (req.url === "/about") {
    res.end("here is a short history");
  }
  res.end(`
    <h1> Oops! </h1>
    <p> we can't seem to find the page you're looking for </p>
    <a href ="/"> back home</a> 
    
    `);
});

server.listen(5000);
