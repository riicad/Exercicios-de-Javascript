function executar30(){
    //entrada de dados
    let quantMacas = parseInt(prompt('Quantas maças você comprou? '))
    let totalPagar

    //processamento
    if(quantMacas>=12){
        totalPagar = quantMacas * 0.40
    }
    else{
        totalPagar = quantMacas * 0.50
    }

    //saida de dados
    alert(`A saída de dados é: R$${totalPagar}`)
}
