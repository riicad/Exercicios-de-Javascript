function executar29(){
    //entrada de dados
    let nome = prompt('Nome do aluno: ')
    let nota = parseFloat(prompt('Nota do aluno: '))

    //processamento
    if (nota>=7){
        //saida de dados
        alert(`O ${nome} está APROVADO`)
    }
    else{
        //saida de dados
        alert(`O ${nome} está REPROVADO!`)
    }
}
