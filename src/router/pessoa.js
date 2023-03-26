const express = require('express')

module.exports = (app)=> {
    app.use("/api/pessoa", require("../controllers/pessoa")(express))
    
}