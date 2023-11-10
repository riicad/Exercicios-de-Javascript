function executar11(){
    //Escreva um programa que calcule a média aritmética entre três números reais inseridos pelo usuário.
    //entrada de dados
    let nota1 = parseFloat(prompt("Digite a nota 1: "))
    let nota2 = parseFloat(prompt("Digite a nota 2: "))
    let nota3 = parseFloat(prompt("Digite a nota 3: "))
    let media

    //processamento
    media = (nota1+nota2+nota3)/3

    //saida de dados
    alert(`A média aritmética entre as três notas é ${media}`)
}
