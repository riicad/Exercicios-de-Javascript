function executar39(){
    let contadora
    let somaValor

    while(contadora<5){
        //entrada de dados
        let numero = parseInt(prompt('Digite um número: '))

        //processamento
        somaValor += numero
        contadora++
    }
    
    //saida de dados
    alert(`A média dos valores é: ${somaValor/5}`)
}
