const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from CI/CD');
});

// ❌ ancien : server.listen(3000)
const port = process.env.PORT || 3000;
const host = '0.0.0.0';
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});

