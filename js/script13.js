function executar13(){
    //) Faça um programa que leia dois números inteiros e verifique se o primeiro é múltiplo do segundo
    //entrada de dados
    let numero = parseFloat(prompt("Digite um números: "))
    let numero2 = parseFloat(prompt("Digite o segundo número: "))
    let resposta

    //processamento
    if (numero%numero2==0) {
        resposta = `O ${numero} é múltiplo ${numero2} `
    }
    else{
        resposta = 'Não existe números multíplos!'
    }

    //resposta
    alert(resposta)
}   
