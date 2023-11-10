function executar52(){
    let contador = 0
    let somaTotal = 0
    
    //processamento
    do{
    contador++
    somaTotal += contador
    }while(contador<100);

    //saida de dados
    alert(`a soma dos número de 1 a 100 é ${somaTotal}`)
}
