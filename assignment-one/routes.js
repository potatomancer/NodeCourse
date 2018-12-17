const fs = require('fs');

const users = {
  name: String,
  hobby: String
}

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Assignment 1, Bitch</title></head>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="users" placeholder="username"><input type="text" name="hobby" placeholder="hobby"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Assignment 1, Bitch</title></head>');
    res.write('<body><ul></ul></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    console.log('yo');
    const body = [];
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
    fs.writeFile('message.txt', message, (err) => {
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  console.log('otherstuff');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>WADDAP BITCH</h1></body>');
  res.write('</html>');
  res.end();
};

// exports = {
//  handler: requestHandler,
//  someText: 'Some hard coded text'
//};

exports.handler = requestHandler;
exports.someText = 'some hard dfajskdf';