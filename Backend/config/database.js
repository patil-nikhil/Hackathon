const mongoose = require("mongoose")

const configureDB = async()=>{
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/Digital_FLake")
        console.log("Connected to the DB")
    } catch (error) {
        console.log("Error While Connecting to the DB")
    }

}

module.exports = configureDB