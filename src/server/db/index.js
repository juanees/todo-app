const mongoose = require('mongoose')
require('dotenv').config();


mongoose
    .connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@localhost:${process.env.DB_PORT}/todos`,{ useNewUrlParser: true })
    .then(()=>{
        console.log("DB Connected Successfully")
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db