function executar01(){
    //Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número: "))

    //processamento
    let multiplic = numero * numero2
    let divisao = numero/numero2
    let soma = numero + numero2
    let subtrac = numero - numero2

    //saida de dados
    alert(`A multiplicação deles é: ${multiplic}`)
    alert(`A divisão deles é: ${divisao}`)
    alert(`A soma deles é: ${soma}`)
    alert(`A subtração deles é: ${subtrac}`)
}