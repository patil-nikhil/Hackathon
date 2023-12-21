const Category = require('../model/Category')

const categoryController = {}

categoryController.create = async(req, res) => {
    try {
        const userId = req.params.userId
        const body = req.body
        const category = await Category.create({userId: userId, ...body})
        if(category) {
            res.json(category)
        } else {
            res.json({})
        }
    } catch (error) {
        res.json(error) 
    }
}

categoryController.listAll = async(req, res)=>{
    try {
        const userId = req.params.id
        const categories = await Category.find({userId:userId})
        if(categories){
            res.json(categories)
        }else{
            res.json([])
        }
    } catch (error) {
        res.json(error)
    }
}

categoryController.update = async(req, res)=>{
    try {
        const categoryId = req.params.id
        const body = req.body
        const category = await Category.findByIdAndUpdate(categoryId, body, {new:true, runValidators:true})
        if(category){
            res.json(category)
        }else{
            res.json({})
        }
    } catch (error) {
        res.json(error)
    }
}

categoryController.destroy = async(req, res) => {
    try {
        const categoryId = req.params.id
        const category = await Category.findByIdAndDelete(categoryId)
        if(category){
            res.json(category)
        }else{
            res.json({})
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = categoryController