import http from "http";
import { createReadStream } from "fs";
import { readFile } from "fs/promises";

const server = http.createServer(async(req, res) => {
    if(req.url === "/stream"){
        const stream = createReadStream("big.txt", {encoding: "utf-8"});
        stream.pipe(res);
    }
    else if (req.url === "/normal"){
        const text = await readFile("big.txt");
        res.end(text);
    }
});

server.listen(3000, () => console.log("Server running at 3000.."));