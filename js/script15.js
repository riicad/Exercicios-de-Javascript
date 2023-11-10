function executar15(){
    //entrada de dados
    let salario = parseFloat(prompt("Qual seu salário: R$"))

    //processamento
    let novoSalario = salario + (salario*0.15)

    //saida de dados
    alert(`Seu salário novo é R$${novoSalario}`)
}
