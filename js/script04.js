function executar04(){
    //Faça um programa que receba três notas de um aluno (cada nota de 0 a 10) e calcule a média ponderada considerando pesos 2, 3 e 5 para as notas, respectivamente.
    //entrada de dados
    let nota1 = parseFloat(prompt("Digite a nota 1: "))
    let nota2 = parseFloat(prompt("Digite a nota 2: "))
    let nota3 = parseFloat(prompt("Digite a nota 3: "))

    //processamento
    let media = (nota1*2 + nota2*3 + nota3*5)/10

    //saida de dados
    alert(`O valor da média é: ${media}`)
}
