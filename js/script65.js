function executar65(){
    let nome
    let idade
    let resposta
    let somaIdade = 0
    let pessoas = 0

    do{
        //entrada de dados
        nome = prompt('Digite seu nome: ')
        idade  = parseInt(prompt(`Digite a idade de ${nome}: `))
        
        //processamento
        somaIdade += idade
        pessoas ++
        resposta = prompt('Você quer continuar o programa? ("fim" para parar/"s" para continuar) ')

    }while(resposta.toLowerCase()='fim');
    
    //saida de dados
    alert(`A média das idades é: ${somaIdade/pessoas}`)
}
