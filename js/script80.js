function executar80(){
    let somaIdade = 0
    let pessoas = 0
    
    for(let resposta = 'sim'; resposta = 'fim';){
        //entrada de dados
        let nome = prompt('Digite seu nome: ')
        let idade = parseInt(`Digite a idade de ${nome}: `)

        //processamento
        somaIdade += idade
        pessoas++

        resposta = prompt('Deseja encerrar o programa? ("fim" para parar/"S" para continuar)')
        resposta.toLowerCase()
    }
    
    //saida de dados
    alert(`A média de a idade deles é ${somaIdade/pessoas}`)
}