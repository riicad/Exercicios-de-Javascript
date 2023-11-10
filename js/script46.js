function executar46(){
    //entrada de dados
    let numero = parseInt(prompt(`Digite um número: `))
    let contador = 0
    let somaPar = 0

    //processamento
    while(numero>=contador){
        if (contador%2==0){
            somaPar += contador
        }
        contador++
    }

    //saida de dados
    alert(`A soma dos número pares de 0 até ${numero} é: ${somaPar}`)

}