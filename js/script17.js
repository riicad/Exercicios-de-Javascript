function executar17(){
    //entrada de dados
    let idade = parseInt(prompt("Digite um número: "))

    //processamento
    if (idade>18){
        var resposta = `VOCÊ É ADULTO!`
    }
    else if(idade>12){
        var resposta = `VOCÊ É ADOLESCENTE!`
    }
    else{
        var resposta = 'VOCÊ É CRIANÇA!'
    }

    //saida de dados
    alert(resposta)
}
