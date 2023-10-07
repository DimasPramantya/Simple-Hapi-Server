const http = require('http');

const requestListener = (req, res) => {
  const { method, url } = req;

  res.setHeader('Content-Type', 'application/json');

  if (url === '/') {
    if (method === 'GET') {
      res.statusCode = 200;
      res.end('<h1>Ini adalah homepage</h1>');
    } if (method === 'POST') {
      let body = [];

      req.on('data', (chunk) => {
        body.push(chunk);
      });

      req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
        const { name } = JSON.parse(body);
        res.statusCode = 200;
        res.end(`<h1>Hai, ${name}!</h1>`);
      });
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      res.statusCode = 200;
      res.end('<h1>Halo! Ini adalah halaman about</h1>');
    } if (method === 'POST') {
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });

      req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
        const { name } = JSON.parse(body);
        res.statusCode = 200;
        res.end(`<h1>Halo! ${name} ini adalah halaman about</h1>`);
      });
    } else {
      res.statusCode = 405;
      res.end(`Halaman tidak dapat diakses dengan ${method} request`);
    }
  } else {
    res.statusCode = 404;
    res.end('Halaman tidak ditemukan!!!');
  }
};

const server = http.createServer(requestListener);

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
