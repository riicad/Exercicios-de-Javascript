function executar23(){
    //entrada de dados
    let mes = prompt("Digite o nome de um mês: ")

    //processamento
    if (mes=='feveiro'){
        var resposta = '29 dias'
    }
    else if(mes=='abril' || mes=='setembro' || mes=='junho' || mes=='novembro'){
        var resposta = '30 dias'
    }
    else{
        var resposta = '31 dias'
    }

    //saida de dados
    alert(`Esse mês tem ${resposta}`)
}
