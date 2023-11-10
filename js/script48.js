function executar48(){
    //entrada de dados
    let numero = prompt('Digite um número: ')
    let digito = 0

    //processamento
    while(0<numero){
        digito = numero % 10
        alert(digito)

        numero = parseInt(numero / 10)
    }

}