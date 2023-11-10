function executar28(){
    //entrada de dados
    let peso = parseFloat(prompt("Digite seu peso: (Kg)"))
    let altura = parseFloat(prompt("Digite sua altura: (m) "))
    let resposta
    //processamento
    
    let imc = peso/altura
    if (imc<18.5){
        resposta = 'BAIXO PESO'
    }
    else if(imc>18.5 && imc<24.9){
        resposta = 'PESO NORMAL'
    }
    else if(imc>24.9 && imc<29.9){
        resposta = 'SOBRE PESO'
    }
    else if(imc>30 && imc>34.9){
        resposta = 'OBESIDADE GRAU 1'
    }
    else if(imc>35 && imc<39.9){
        resposta = 'OBESIDADE GRAU 2'
    }
    else{
        resposta = 'OBESIDADE GRAU 3'
    }

    //saida de dados
    alert(`Seu IMC é ${imc} e sua classificação é: ${resposta}`)
}
