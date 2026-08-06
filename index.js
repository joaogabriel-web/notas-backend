// console.log("HELLO WORLD");

import express from 'express' // TYPE MODULE
// const express = require("express") // Type common JS

// inicializando o express - new
const app = express()
    // var
    // const exemplo = "batata", exmplo = 0
    // let expmloAlterar = 0, exemploAlterar = "batata"

 // Exercicio 1   
app.get('/api/somar', (req, res) => {

   
    // http://localhost:3000/api/somar?num1=20&num2=70
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ mesage: num1 + num2 })  //  res.send('Hello World') 
})

// Exercicio 2
app.get("/api/salario/:valor/:hora", (req, res) => {
  const valorGanho = Number(req.params.valor)
  const HoraTrabalhadas = Number(req.params.hora)

  const resultado = valorGanho * HoraTrabalhadas
  res.send({ mesage: resultado })

  // res.send({ Message: valorGanho * HoraTrabalhadas})
})

// Exercicio 3
app.get("/api/pessoa/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
  const pessoapeso1 = Number(req.params.peso1)
  const pessoapeso2 = Number(req.params.peso2)
  const pessoapeso3 = Number(req.params.peso3)
  const pessoapeso4 = Number(req.params.peso4)
  const pessoapeso5 = Number(req.params.peso5) 

  const resultado = pessoapeso1 + pessoapeso2 + pessoapeso3 + pessoapeso4 + pessoapeso5
  const media = resultado / 5
  res.send({ mesage: media }) 
})

// Exercicio 4
app.get("/api/temperatura/:grau", (res, req) => {
  const grauCelsius = Number(res.params.grau)

  const Fahrenheit = (9 * grauCelsius + 160) / 5
  res.send({ mesage: Fahrenheit })
})

// Exercicio 5
app.get("/api/distancia/:milha", (res, req) => {
  const milhas = Number(req.params.milha)

  const km = milhas * 1.60934
  res.send({ mesage: km })
})

// Exercicio 6
app.get("/api/tempo/:segundo", (res, req) => {
  const segundos = Number(pes.params.segundos)

  const
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})