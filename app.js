const HTTP = require('http');
const CREATE_SERVER = HTTP.createServer;
const PORT = process.env.port || 8060;
const HOSTNAME = process.env.HOSTNAME ? '0.0.0.0' : '127.1.0.1';

const server = CREATE_SERVER((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hi World!');
  });

server.listen(PORT, HOSTNAME, () => console.log(`Server running at http://${HOSTNAME}:${PORT}`));