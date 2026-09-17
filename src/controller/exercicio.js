import ServiceExercicio from "../service/exercicio.js"

class ControllerExercicio {
//  res.send('Hello World')
    Somar(req ,res) {
        try{
            // query usa ? na URL
            // Query na URL tem que colocar a API e "?num1=10 &num2=30" No POSTMAN tambem tem que colocar e no Params
            // http://localhost:3000/api/somar?num1=20&num2=70
            const num1 = Number(req.query.num1)
            const num2 = Number(req.query.num2)

            const soma = ServiceExercicio.Somar(num1, num2)
            res.send({ mesage: soma }) 
        }  catch (error) {
            res.send({ message: error.message})
        }
    }

    Salario(req, res) {
    const valorGanho = Number(req.params.valor)
    const HoraTrabalhadas = Number(req.params.hora)

    const resultado = ServiceExercicio.Salario(valorGanho, HoraTrabalhadas)
    res.send({ mesage: resultado })

    // res.send({ Message: valorGanho * HoraTrabalhadas})
    }

    Pessoa(req, res) {
    const peso1 = Number(req.params.peso1)
    const peso2 = Number(req.params.peso2)
    const peso3 = Number(req.params.peso3)
    const peso4 = Number(req.params.peso4)
    const peso5 = Number(req.params.peso5) 

     const media = ServiceExercicio.Pessoa(peso1, peso2, peso3, peso4, peso5)
    res.send({ mesage: media }) 
    }

    Temperatura(req, res) {
    const grauCelsius = Number(req.params.grau)

    const Fahrenheit = (9 * grauCelsius + 160) / 5
    res.send({ mesage: Fahrenheit })
    }

    Distancia(req, res) {
    const milhas = Number(req.params.milha)

    const km = milhas * 1.60934
    res.send({ mesage: km })
    }

    Tempo(req, res) {
    const segundosTotais = Number(req.params.segundos)
    const horas = Math.floor(segundosTotais / 3600)
    const minutos = Math.floor((segundosTotais % 3600) / 60)
    const segundos = segundosTotais % 60

    res.send({ mesage: `${horas} horas, ${minutos} minutos, ${segundos} segundos` })
    }

    Medidas(req, res) {
    const km = Number(req.params.quilometro)
    const metros = km * 1000
    const centimetros = metros * 100
    res.send({ mesage: { quilometro: km, metros, centimetros } })
    }

    Tabuada(req, res) {
    const numero = Number(req.params.numero)
    const tabela = []
    for (let i = 0; i <= 10; i++) {
        tabela.push(`${numero} x ${i} = ${numero * i}`)
    }
    res.send({ mesage: tabela })
    }

    Somars(req, res) {
    const num1 = req.body.num1
    const num2 = req.body.num2

    res.send({ mesage: num1 + num2 })
    }

    Medianotas(req, res) {
    const n1 = req.body.n1
    const n2 = req.body.n2
    const n3 = req.body.n3

    const resultado = n1 + n2 + n3
    const media = resultado / 3

    res.send({ message: media })
    }

    Pesoideal(req, res) {

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

    res.send({ message: pesoIdeal })
    }

    Matematica(req, res) {
    const n1 = req.body.n1
    const n2 = req.body.n2
    const op = req.body.op

    let resultado

    if (op == "+"){
        resultado = n1 + n2
    } else if (op == "-") {
        resultado = n1 - n2
    } else if (op == "/") {
        resultado = n1 / n2
    } else if (op == "x") {
        resultado = n1 * n2
    }
    
    res.send({ message: resultado })
    }

    Numpositivo(req, res) {
    const num1 = req.body.num1

    if ( num1 > 0) {
        console = "Positvo"
    } else if (num1 < 0){
        console = "Negativo"
    }

    res.send({ mensagem: console })
    }

    Definir(req, res) {
    const numero = req.body.numero

    if (numero % 2 == 0){
        resultado = "Par"
    } else {
        resultado = "Impar"
    }

    res.send({ mensagem: resultado })
    }

    Maior(req, res) {
    const num1 = req.body.num1  
    const num2 = req.body.num2

    if (num1 > num2) {
        resultado = num1
    } else if (num2 > num1) {
        resultado = num2
    }

    res.send({ mensagem: resultado })
    }

}

export default new ControllerExercicio()