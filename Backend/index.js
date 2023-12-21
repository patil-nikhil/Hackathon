const express = require('express')
const cors = require('cors')
const configureDB = require('./config/database')
const router = require('./config/routes')
const port = 3331

configureDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})