require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models=require('./models/models')
const router = require('./routes/indexRouter')

const app = express()

app.use('/',router)

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