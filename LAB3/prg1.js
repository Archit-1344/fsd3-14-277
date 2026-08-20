import http from 'http';

const server = http.createServer((req, res) => {
    console.log("<h2>Welcome to NODE JS</h2>");
    console.log( req.url);
    console.log("request method") ;
    console.log(req.method);
    console.log("request header") ;
    console.log(req.header);
    console.log("headers host") ;
   console.log("req.headers.host") ;
    res.end("Hello") ;

});

const port = 4444 ;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});