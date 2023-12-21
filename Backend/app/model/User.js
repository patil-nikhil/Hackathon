const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const nameFormat = /^[a-zA-Z ]*$/

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty'],
        validate: {
            validator: function (value) {
                return nameFormat.test(value)
            },
            message: function (value) {
                return {
                    error: `${value} is not a valid name`
                }
            }
        }, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: function (value) {
                return {
                    error: `${value} Provide a valid Email id`
                }
            }
        }
    },
    password: {
        type: String,
        required: [true, 'password cannot be empty']
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User