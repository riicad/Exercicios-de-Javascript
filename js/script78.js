function executar78(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let digito = 0

    //processamento
    for(numero; numero>0;){
        digito = numero % 10
        alert(digito)

        numero = parseInt(numero/10)
    }
}
