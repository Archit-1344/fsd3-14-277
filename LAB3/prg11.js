import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
 if (req.url === '/' && req.method === 'GET') {
    res.end('<h1>Home Page</h1>');
  }
  else if (req.url === '/product' && req.method === 'GET') {
   const products = [
    {
      id : 1 , 
      name : "mobile" ,
      price : 10000 ,
    } ,
    {
      id : 2 ,
      name : "laptop" ,
      price : 50000 ,
    }
   ] ;
   res.end(JSON.stringify(products)) ;
  }
  else if (req.url === '/product' && req.method === 'POST') {
     // Retrieve data from client
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const product = JSON.parse(body);

            // Add data to database

            res.writeHead(201, {
                "content-type": "application/json"
            });

            // Send back the status
            res.end(JSON.stringify({
                msg: 'PRODUCT ADDED',
                product
            }));
        });
  }
  else if (req.url === '/product' && req.method === 'PUT') {
    res.end('<h1>Update Product</h1>');
  }
  else if (req.url === '/product' && req.method === 'DELETE') {
    res.end('<h1>Delete Product</h1>');
  }
  else{
    res.statusCode = 404;
    res.end('<h1>Page Not Found</h1>');
  }
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});