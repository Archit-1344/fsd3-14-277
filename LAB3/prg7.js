import http from "http";
import { readFile } from "fs/promises";

const server = http.createServer((req, res) => {
  const stream = createReadStream("big.txt");
  stream.pipe(res                  );
});

server.listen(3000, () => console.log("Server is running..."));