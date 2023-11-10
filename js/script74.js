function executar74(){
    let idade = 0
    let somaIdade = 0
    
    //processamento
    for(let i=0; i<5; i++){
        //entrada de dados
        let nome = prompt('Digite seu nome: ')
        idade = parseInt(prompt(`Digite a idade de ${nome}: `))
        
        //processameto
        somaIdade += idade
    }
    //saida de dados
    alert(`A média das idades é ${somaIdade/5}`)
}
