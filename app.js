const express = require('express');
const http = require('http');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, '0.0.0.0', () => console.log(`Running on localhost:${port}`));