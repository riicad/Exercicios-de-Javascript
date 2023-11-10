function executar20(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))

    //processamento
    if (numero%2==0){
        var resposta = 'PAR'
    }
    else{
        var resposta = 'ÍMPAR'
    }

    //saida de dados
    alert(`O número ${numero} é ${resposta}`)
}
