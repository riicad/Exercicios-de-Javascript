function executar19(){
    //entrada de dados
    let nota1 = parseFloat(prompt("Digite a priemira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let media = (nota1 + nota2 + nota3)/3
    
    //processamento
    if(media>7){
        var resposta = 'ALUNO APROVADO'
    }
    else{
        var resposta = 'ALUNO REPROVADO'
    }

    //saida de dados
    alert(resposta)
}