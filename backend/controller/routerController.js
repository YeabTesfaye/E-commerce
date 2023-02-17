const products = require('../products')
const getProducts = (req,res) => {
    res.status(200).json(products)
}


module.exports = {
    getProducts
}