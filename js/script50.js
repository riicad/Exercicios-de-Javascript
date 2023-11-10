function executar50(){
    let resposta = 'continue'
    let somaIdade = 0
    let pessoas = 0

    while(resposta.toLowerCase()!='fim'){
        //entrada de dados
        let nome = prompt('digite seu nome: ')
        let idade = parseInt(prompt(`Digite a idade de ${nome}: `))
        
        //processamento
        somaIdade += idade
        pessoas ++

        //entrada de dados
        resposta = prompt('Você quer registrar mais uma pessoa? ("fim" para PARAR o programa)')
    }
    //saida de dados
    alert(`A média da idade dessas pessoas é ${somaIdade/pessoas}`)

}
