// const http = require('http');
// uses import instead of require for emascript module 

// import a given module i.e http 
import http from 'http';

// import a given function from a module 
import {createServer} from 'http';

// const server = .createServer((req, res) => {

const server = createServer((req, res) => {
        res.end('Hello World\n');
});


server.listen(4242, () => {
    console.log('Server is running');
});