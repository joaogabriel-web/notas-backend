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

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})