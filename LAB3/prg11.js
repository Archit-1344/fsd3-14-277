import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
 if (req.url === '/' && req.method === 'GET') {
    res.end('<h1>Home Page</h1>');
  }
  else if (req.url === '/product' && req.method === 'GET') {
    res.end('<h1>Show Product</h1>');
  }
  else if (req.url === '/product' && req.method === 'POST') {
    res.end('<h1>Add Product</h1>');
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