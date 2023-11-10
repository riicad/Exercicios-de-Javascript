function executar16(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))

    //processamneto
    if (numero==0){
        //saida de dados
        var resposta = `ESSE NÚMERO É ZERO`
    }
    else if (numero>0){
        //saida de dados
        var resposta = `ESSE NÚMERO É POSITIVO`
    }
    else{
        //saida de dados
        var resposta = `ESSE NÚMERO É NEGATIVO`
    }

    alert(resposta)
}
