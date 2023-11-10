function executar44(){
    let contador
    let nome
    let idade
    let somaIdade

    while(contador>5){
        //entrada de dados
        nome = prompt(`Nome da ${contador+1}° pessoa: `)
        idade = parseInt(`Idade da ${contador+1}° pessoa: `)
        
        //processamento
        somaIdade += idade
        contador++
    }
    //saida de dados
    alert(`A média das idades é: ${somaIdade/5}`)
}
