function executar54(){
    let somaNum = 0
    let contador = 0
    
    //processamento
    do{
        contador++
        //entrada de dados
        let numero = parseInt(prompt('Digite um número: '))
        somaNum += numero
    }while(contador<5);

    //saida de dados
    alert(`A média aritmética desses números é: ${somaNum/5}`)
   
    
}