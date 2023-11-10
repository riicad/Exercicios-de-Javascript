function executar31(){
    //entrada de dados
    let salarioMinimo = parseFloat(prompt('Digite o valor do salário minimo: R$'))
    let salarioFunci = parseFloat(prompt('Digite o valor do salário de um funcionário: R$'))
    let quantidade //quantidade de salario minimo

    //processamento
    quantidade = salarioFunci/salarioMinimo

    //saida de dados
    alert(`Ele recebe ${quantidade.toFixed(0)} salario minimos!`)
}
