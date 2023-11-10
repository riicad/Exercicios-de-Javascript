function executar49(){
    //entrada de dados
    let numero = parseInt(prompt(`digite um número: `))
    let fatorial = 1
    
    //processamento
    while(numero>0){
        fatorial *= numero
        numero--
    }

    //saida de dados
    alert(`A saída de dados é: ${fatorial}`)
}