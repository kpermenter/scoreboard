const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || '8080';
app.set('port', port);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (request, response){
    response.sendFile(path.join(__dirname, 'build/index.html'))
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));