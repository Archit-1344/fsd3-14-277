import http from 'http';
import { createReadStream } from "fs";

const server = http.createServer((req, res) => {
 if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
   const stream = createReadStream("./pages/airtag.html" ,{encoding:"utf-8" ,});
   stream.pipe(res);
 }
 else if (req.url === "/mobile") {
    res.writeHead(200, {"Content-Type": "text/json"});
    const stream = createReadStream("./data/products.json" ,{encoding:"utf-8" ,});
    stream.pipe(res);
 }
 else if (req.url=== "/manual")
{
    res.writeHead(200, {"Content-Type": "text/plain"});
    const stream = createReadStream("./data/chatgpt.txt" ,{encoding:"utf-8" ,});
    stream.pipe(res);
} else{
    res.statusCode = 404;
    res.end("Page not found");
 }
});


server.listen(4000, () => console.log("server is running..."));