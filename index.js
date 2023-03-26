const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("", express.static(__dirname+"/front"))

require('./src/router/pessoa')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
    }
)