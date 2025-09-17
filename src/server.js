const http = require('http');
const server = http.createServer((req,res)=>{
   res.end('Hello from CI/CD');
});
server.listen(3000);
