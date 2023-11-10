function executar34(){
    //entrada de dados
    let idade = parseInt(prompt('Digite sua idade: '))
    
    //processamento
    if (idade>=18 && idade<70){
        var resultado = 'VOTO É OBRIGATÓRIO, VOCÊ PODE VOTAR!'
    }
    else if (idade>15 && idade<18 || idade>70){
        var resultado = 'VOTO OPCIONAL, VOCÊ PODE VOTAR!'
    }
    else{
        var resultado = 'VOCÊ NÃO PODE VOTAR!'
    }

    //saida de dados
    alert("resultado: "+resultado)
}
