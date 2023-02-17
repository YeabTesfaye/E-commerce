const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routers = require('./router/router')
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/', routers)
const router = express.Router()

module.exports = app