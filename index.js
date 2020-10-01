// import server from './server.js'
// import express from 'express'

const server = require('./server.js')
// const express = require('express')

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('server running'))

 //add start script to package.json 