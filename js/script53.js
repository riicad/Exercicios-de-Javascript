function executar53(){
    let contador = 0
    let somaPar = 0
    
    //processamento
    do{
        contador++
        if (contador%2==0){
            somaPar += contador
        }
    }while(contador<50);

    //saida de dados
    alert(`A soma dos números pares é ${somaPar}`)
}
