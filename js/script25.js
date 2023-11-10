function executar25(){
    //entrada de dados
    let quantFaltas = parseInt(prompt("Digite a quantidade de faltas do aluno: "))
    let resposta
    
    //processamento
    if (quantFaltas>15){
        resposta = 'REPROVADO'    
    }
    else{
        resposta = 'APROVADO'
    }

    //saida de dados
    alert(`O aluno está ${resposta}`)
}
