import express from "express"
import ControllerExercicio from "../controller/exercicio.js"

const router = express.Router()
 // Exercicio 1   
router.get('/api/somar', ControllerExercicio.Somar)

// Exercicio 2
router.get("/api/salario/:valor/:hora", ControllerExercicio.Salario)

// Exercicio 3
router.get("/api/pessoa/:peso1/:peso2/:peso3/:peso4/:peso5", ControllerExercicio.Pessoa)

// Exercicio 4
router.get("/api/temperatura/:grau", ControllerExercicio.Temperatura)

// Exercicio 5
router.get("/api/distancia/:milha", ControllerExercicio.Distancia)

// Exercicio 6
router.get("/api/tempo/:segundos", ControllerExercicio.Tempo)

// Exercicio 7: Quilômetros -> metros e centímetros
router.get('/api/medidas/:quilometro', ControllerExercicio.Medidas)

// Exercicio 8: Tabuada (0 até 10)
router.get('/api/tabuada/:numero', ControllerExercicio.Tabuada)

// POST
// No POSTMAN na onde fica a URL que tem colocar URL Completo. Exemeplo: "localhost:3000/api/matematica"

// Exemplo Post
router.post("/api/somars", ControllerExercicio.Somars)

// Exercicio 9: Post
router.post("/api/medianotas", ControllerExercicio.Medianotas)

// Exercício 10: Post
router.post("/api/pesoideal", ControllerExercicio.Pesoideal)

// Execicio 11
router.post("/api/matematica", ControllerExercicio.Matematica)

// Exercicio 12
router.post("/api/numpositivo", ControllerExercicio.Numpositivo)

// Exercicio 13
router.post("/api/definir", ControllerExercicio.Definir)

export default router