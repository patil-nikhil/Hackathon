const mongoose = require('mongoose')
const Schema = mongoose.Schema
const nameFormat = /^[a-zA-Z ]*$/

const productSChema = new Schema({
    name:{
        type:String,
        required:true,
        validate: {
            validator: function (value) {
                return nameFormat.test(value)
            },
            message: function (value) {
                return {
                    error: `${value} is not a valid product name`
                }
            }
        }  
    },
    packSize: {
        type: String,
        required: true
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    MRP: {
        type: Number,
        required: true
    },
    status: {
        type: String
    }
})

const Product = mongoose.model('Product', productSChema)

module.exports = Product