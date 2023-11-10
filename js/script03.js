function executar03(){
    //Crie um programa que leia a base e a altura de um triângulo e calcule sua área.
    //entrada de dados
    let base = parseFloat(prompt("Digite o tamanho da base: "))
    let altura = parseFloat(prompt("Digite o tamanho da altura: "))

    //processamento
    let area = (base * altura)/2

    //saida de dados
    alert(`A area do triangulo é: ${area}`)
}
