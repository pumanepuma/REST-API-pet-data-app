require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models=require('./models/models')
const fileUpload = require('express-fileupload')
const router = require('./routes/indexRouter')
const path = require('path')
const ErrorHandler = require('./middleware/ErrorHandlerMiddleware')

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname,'static')))
app.use('/',router)

app.use(ErrorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`App listening to port ${PORT}`)
        })
    }catch(e){
        console.log(e.message)
    }
}

start()