const express = require('express')
const { getProducts, registerUser, loginUser } = require('../controller/routerController')
const router = express.Router()


router.get('/products',getProducts)
router.post('/register', registerUser)
router.post('/login', loginUser)
module.exports = router