import http from "http";

const server = http.createServer((req , res)=>{

    if(req.url==="/")
        res.end('<h1>Home Page</h1>')
    else if(req.url=="/about")
        res.end('<h1>About Page</h1>')
    else if (req.url=='/product')
        res.end(`<h1>Mobile Phone</h1>
                <h2>Price: $999</h2>
                <p>Discount 5%</p>
                <a href='#'>Buy Now</a>
        `) ;
    else{
        res.statusCode=404 ;
        res.end(`<h1> 404Page Not Found</h1>
                  <p>Page not found</p>
                  <a href='/'>Go to Home Page</a>
            `) ;
    }
    }) ;

server.listen(7307, () => {
    console.log("server is running ") ;
}) ;