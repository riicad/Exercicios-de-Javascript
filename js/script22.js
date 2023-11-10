function executar22(){
    //entrada de dados
    let salario = parseFloat(prompt('Digite o valor do seu salário: '))

    //processamento
    if (salario>2000){
        var desconto = salario * 0.10
    }
    else{
        var desconto = salario * 0.05
    }

    let novoSalario = salario + desconto

    //entrada de dados
    alert(`Seu novo salário é: R$${novoSalario}`)
}
