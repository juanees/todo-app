const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// TODO: ADD DB CONNECTION

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.listen(apiPort, () => console.log(`Server running ⭐⭐⭐ on port http://localhost:${apiPort}`))
