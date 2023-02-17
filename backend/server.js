require("dotenv").config();
const colors = require('colors')
const http = require("http");
const app = require('./app')
const CONNECTDB = require('./config/db')
CONNECTDB()
const server = http.createServer(app)
const PORT =  process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`the server is listing at ${PORT}`.cyan)
})
