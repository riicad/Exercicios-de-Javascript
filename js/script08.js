function executar08(){
    //Escreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa.
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let outroNumero = parseInt(prompt("Digite outro número: "))

    //processamento
    let local = numero
    numero = outroNumero
    outroNumero = local

    //saida de dados
    alert(`Primeiro número: ${numero}`)
    alert(`Segundo número: ${outroNumero}`)
}
