const http = require('http');
const PORT = 4567;

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js 20 + Docker \nYou see this message that means CI run before CD!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//
//