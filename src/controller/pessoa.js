import ServicePessoa from '../service/pessoa.js'

class ControllerPessoa {
    //  res.send('Hello World')
    // query usa ? na URL
    // Query na URL tem que colocar a API e "?num1=10 &num2=30" No POSTMAN tambem tem que colocar e no Params
    // http://localhost:3000/api/somar?num1=20&num2=70
    Buscar(req, res) {
        try {
            const nomes = ServicePessoa.Buscar()

            res.send({ nomes })
        } catch (error) {
            res.send({ message: error.message })

        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServicePessoa.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.nome
            ServicePessoa.Criar(nome)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }

    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.id

            const alt = ServicePessoa.Alterar(id, nome)
            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            ServicePessoa.Deletar(id)

            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerPessoa()