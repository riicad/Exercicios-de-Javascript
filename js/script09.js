function executar09(){
    // Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses.
    //entrada de dados
    let depositoMensal = parseFloat(prompt('Digite o valor do depósito: R$'))
    let taxaJuros = parseFloat(prompt('Digite o valor do desconto: '))
    let valorTotal
    
    //processamento
    valorTotal = depositoMensal + ((depositoMensal/100)*taxaJuros)*12

    //saida de dados
    alert(`Após 12 meses é R$${(valorTotal).toFixed(2)}`)
}
