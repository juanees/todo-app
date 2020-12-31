const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// TODO: ADD DB CONNECTION
const todoRouter = require('./routes/todo-router')

const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1/todo', todoRouter)

app.listen(apiPort, () => console.log(`Server running ⭐⭐⭐ on http://localhost:${apiPort}, you should go to http://localhost:${apiPort}/api/v1/todo`))
