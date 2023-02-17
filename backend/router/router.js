const express = require('express')
const { getProducts } = require('../controller/routerController')
const router = express.Router()
const products  = require('../products')

router.get('/products',getProducts)

module.exports = router