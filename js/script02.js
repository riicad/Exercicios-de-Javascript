function executar02(){
    //) Escreva um programa que leia o raio de um círculo e calcule sua área e perímetro.
    //entrada de dados
    let raio = parseFloat(prompt("Digite um número para o raio: "))

    //processamento
    let area = 3.14159 * (raio^2)
    let perimetro = 2 * 3.14159 * raio

    //saida de dados
    alert(`A are do circulo é: ${area}`)
    alert(`O perimetro do circulo é: ${perimetro}`)

}