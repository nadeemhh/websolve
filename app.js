const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const port = process.env.PORT || 3000


app.listen(port)