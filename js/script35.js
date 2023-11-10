function executar35(){
    //entrada de dados
    let num = parseInt(prompt('Digite um número: '))
    let num2 = parseInt(prompt('Digite o segundo número: '))
    let num3 = parseInt(prompt('Digite o terceiro número: '))
    let media = (num + num2 + num3)/3

    //processamento
    if (media>7){
        var resultado = 'APROVADO'
    }
    else{
        var resultado = 'REPROVADO'
    }

    //saida de dados
    alert(resultado)
}
