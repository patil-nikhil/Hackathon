const Category = require('../model/Category')
const Product = require('../model/Product')

const productController = {}

productController.listAll = async(req, res)=>{
    try {
        const userId = req.params.id
        const products = await Product.find({userId: userId})
        if(products) {
            res.json(products)
        } else {
            res.json({})
        }
    } catch (error) {
        res.json(error)
    }
}

productController.create = async(req, res) => {
    try {
        const body = req.body
        const userId = req.params.userId
        const product = await Product.create({ ...body, userId: userId})
        if (product) {
            res.json(product)
        } else {
            res.json({})
        }
    } catch (error) {
        res.json(error)
    }
}

productController.update = async (req, res) => {
    try {
        const body = req.body
        const productId = req.params.id
        const product = await Product.findOneAndUpdate({ _id: productId }, body, { new: true, runValidators: true })
        if (product) {
            res.json(product)
        } else {
            res.json({})
        }
    } catch (error) {
        res.json(error)
    }
}

productController.destroy = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        if (product) {
            res.json(product)
        } else {
            res.json({})
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = productController