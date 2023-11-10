function executar61(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))

    //processamento
    do{
        if (numero%2==0){
            somaPar += numero
        }
        numero--

    }while(numero>1);
    
    //saida de dados
    alert(`A soma dos números pares é: ${somaPar}`)
}