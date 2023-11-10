function executar18(){
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let outroNumero = parseInt(prompt("Digite outro número: "))

    //processamento
    if (numero>outroNumero){
        var maior = numero
    }
    else{
        var maior = outroNumero
    }

    //saida de dados
    alert(`O maior número é: ${maior}`)
}
