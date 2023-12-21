const express = require('express')
const userAuthentication = require('../app/middleware/userAuthentication')
const userController = require('../app/controller/userController')
const categoryController = require('../app/controller/categoryController')
const productController = require('../app/controller/productController')

const router = express.Router()

router.post('/api/user/register', userController.register)
router.post('/api/user/login', userController.login)

router.get('/api/category/list/:id', userAuthentication, categoryController.listAll)
router.post('/api/category/create/:id',userAuthentication ,categoryController.create)
router.put('/api/category/update/:id',userAuthentication, categoryController.update)
router.delete('/api/category/destroy/:id',userAuthentication, categoryController.destroy)


router.get('/api/product/list/:id', userAuthentication, productController.listAll)
router.post('/api/product/create/:id', userAuthentication, productController.create)
router.put('/api/product/update/:id', userAuthentication, productController.update)
router.delete('/api/product/destroy/:id', userAuthentication, productController.destroy)

module.exports = router