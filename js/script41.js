function executar41(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))

    //processamento
    while(contadora<=numero){
        if(numero%contadora==0){
            alert(contadora)
        }
    }
}
