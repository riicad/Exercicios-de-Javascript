function executar10(){
    // Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))
    let contadora
    //processamento
    for (contadora = 0; contadora<=10; contadora++){
        //saida de dados
        alert(`${numero} x ${contadora} = ${numero*contadora}`)
    }
}
