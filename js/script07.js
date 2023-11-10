function executar07(){
    //Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base
    //entrada de dados
    let salarioBase = parseFloat(prompt('Digite o salário Base: R$'))
    
    //processamento
    let salarioLiquido = salarioBase + (salarioBase*0.05)

    //saida de dados
    alert(`O salário dele é R$${salarioLiquido.toFixed(2)}`)
}
