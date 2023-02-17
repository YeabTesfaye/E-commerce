const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routers = require('./api/router/router')
const app = express()
const {errorHandler} = require("./api/middleware/errorMiddleWare");
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/api/users',routers)
app.use(errorHandler)
module.exports = app