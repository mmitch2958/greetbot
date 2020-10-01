const express = require('express')
const server = express();

server.get('/', (req, res) => {
    res.status(200).json({
        hello: "hello world",
        environment: process.env.NODE_ENV,
    })
})
// server.get('/', (req, res) => {
//     res.status(200).json({ hello: 'hello' });
// });

module.exports = server;