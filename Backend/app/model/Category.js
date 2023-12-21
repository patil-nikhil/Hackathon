const mongoose = require('mongoose')
const Schema = mongoose.Schema
const nameFormat = /^[a-zA-Z ]*$/

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty'],
        validate: {
            validator: function (value) {
                return nameFormat.test(value)
            },
            message: function (value) {
                return {
                    error: `${value} is not a valid category name`
                }
            }
        }
    },
    description: {
        type: String,
        required: [true, 'desc cannot be empty']
    },
    status: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category