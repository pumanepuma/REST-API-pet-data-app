require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models=require('./models/models')
const fileUpload = require('express-fileupload')
const router = require('./routes/indexRouter')
const path = require('path')
const cors = require('cors')
const ErrorHandler = require('./middleware/ErrorHandlerMiddleware')

const app = express()

app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', ['authorization','Content-type']);
    next();
})

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname,'static')))
app.use('/',router)
app.use(cors())

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