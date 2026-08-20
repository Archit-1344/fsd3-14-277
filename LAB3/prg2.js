import http from 'http' ;

const server = http.createServer((req , res) => {
//   res.writeHead(201 , {
//  "content-type": "text/html"
//   }) ;
res.end("<h1>Welcome to the server</h1>") ;
}) ;

server.listen (4444 , () => console.log("Server is running")) ;