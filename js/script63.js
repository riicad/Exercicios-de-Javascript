function executar63(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let digito = 0

    //processamneto
    do{
        digito = numero % 10
        alert(digito)
        numero = parseInt(numero/10)
    }while(numero>0);
}
