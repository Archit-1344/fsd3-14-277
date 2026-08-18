import http from "http";

const server = http.createServer((req , res)=>{
    res.end("<h2>Welcome to the server</h2>") ;
}) ;

server.listen(5000, () => {
    console.log("server is running ") ;
}) ;