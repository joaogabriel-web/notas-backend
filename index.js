// console.log("HELLO WORLD");

import express from 'express' // TYPE MODULE
// const express = require("express") // Type common JS

// inicializando o express - new
const app = express()

app.get('/api/somar', (req, res) => {
    // var
    // const exemplo = "batata", exmplo = 0
    // let expmloAlterar = 0, exemploAlterar = "batata"

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ mesage: num1 + num2 })  //  res.send('Hello World') 
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})