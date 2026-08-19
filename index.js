// console.log("HELLO WORLD");

import express from 'express' // TYPE MODULE
// const express = require("express") // Type common JS

// inicializando o express - new
const app = express()
app.use(express.json())
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
app.get("/api/temperatura/:grau", (req, res) => {
  const grauCelsius = Number(req.params.grau)

  const Fahrenheit = (9 * grauCelsius + 160) / 5
  res.send({ mesage: Fahrenheit })
})

// Exercicio 5
app.get("/api/distancia/:milha", (req, res) => {
  const milhas = Number(req.params.milha)

  const km = milhas * 1.60934
  res.send({ mesage: km })
})

// Exercicio 6
app.get("/api/tempo/:segundos", (req, res) => {
  const segundosTotais = Number(req.params.segundos)
  const horas = Math.floor(segundosTotais / 3600)
  const minutos = Math.floor((segundosTotais % 3600) / 60)
  const segundos = segundosTotais % 60

  res.send({ mesage: `${horas} horas, ${minutos} minutos, ${segundos} segundos` })
})

// Exercicio 7: Quilômetros -> metros e centímetros
app.get('/api/medidas/:quilometro', (req, res) => {
  const km = Number(req.params.quilometro)
  const metros = km * 1000
  const centimetros = metros * 100
  res.send({ mesage: { quilometro: km, metros, centimetros } })
})

// Exercicio 8: Tabuada (0 até 10)
app.get('/api/tabuada/:numero', (req, res) => {
  const numero = Number(req.params.numero)
  const tabela = []
  for (let i = 0; i <= 10; i++) {
    tabela.push(`${numero} x ${i} = ${numero * i}`)
  }
  res.send({ mesage: tabela })
})

// POST e PULL

// Exemplo Post
app.post("/api/somar", (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2

  res.send({ mesage: num1 + num2 })
})

// Exercicio 9: Post
app.post("/api/medianotas", (req, res) => {
  const n1 = req.body.n1
  const n2 = req.body.n2
  const n3 = req.body.n3

  const resultado = n1 + n2 + n3
  const media = resultado / 3

  res.send({ message: media })
})

// Exercício 10: Post
app.post("/api/pesoideal", (req, res) => {

    const sexo = req.body.sexo
    const altura = req.body.altura

    let pesoIdeal

    if (sexo == "H") {
        pesoIdeal = (72.7 * altura) - 58
    } else if (sexo == "M") {
        pesoIdeal = (62.1 * altura) - 44.7
    } else {
        return res.send({ mensagem: "Sexo inválido" })
    }

    res.send({ mensagem: pesoIdeal })
})

// Execicio 11
app.post("/api")


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})