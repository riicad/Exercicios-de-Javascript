function executar12(){
    //Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC).
    //entrada de dados
    let peso = parseFloat(prompt('Digite seu peso: (Kg) '))
    let altura = parseFloat(prompt('Digite sua altura: (m)'))
    let IMC

    //processamento
    IMC = peso/(altura^2)

    //saida de dados
    alert(`Seu IMC é: ${IMC}`)
}
