// console.log("HELLO WORLD");
import router from './src/router/exercicio.js'
import express from 'express' // TYPE MODULE
// const express = require("express") // Type common JS

// inicializando o express - new
const app = express()

// para utilizar o POST tem que usar: app.use(express.json)
app.use(express.json())
    // var
    // const exemplo = "batata", exmplo = 0
    // let expmloAlterar = 0, exemploAlterar = "batata"
app.use(router)

// Exercicio 15
app.post("/api/maior", (req, res) => {
  const num1 = req.body.num1  
  const num2 = req.body.num2

  if (num1 > num2) {
    resultado = num1
  } else if (num2 > num1) {
    resultado = num2
  }

  res.send({ mensagem: resultado })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})