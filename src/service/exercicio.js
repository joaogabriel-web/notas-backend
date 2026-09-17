class ServiceExercicio {

    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Por favor imformar somente numeros0")
        }
        return num1 + num2
    }

    Salario(valorGanho, HoraTrabalhadas) {
        return valorGanho * HoraTrabalhadas
    }

    Pessoa(peso1, peso2, peso3, peso4, peso5) {
        const resultado = peso1 + peso2 + peso3 + peso4 + peso5
        const media = resultado / 5
        return media
    }
}

export default new ServiceExercicio()