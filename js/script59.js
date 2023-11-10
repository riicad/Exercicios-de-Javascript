function executar59(){
    let contador = 0
    let somaIdade = 0

    do{
        //entrada de dados
        nome = prompt(`Nome da ${contador+1}° pessoa: `)
        idade = parseInt(`Idade da ${contador+1}° pessoa: `)
        
        //processamento
        somaIdade += idade
        contador++

    }while(contador<5);

    //saida de dados
    alert(`A média das idades é ${somaIdade/5}`)
}