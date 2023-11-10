function executar79(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let fatorial = 0
    
    //processamento
    for(numero; numero>0; numero--){
        fatorial *= numero
    }

    //saida de dados
    alert(`O fatorial de ${numero} é ${fatorial}`)
}
