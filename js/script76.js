function executar76(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let somaPar = 0
    
    //processamento
    for(let i = 0; i<numero; i++){
        if(i%2==0){
            somaPar += i
        }
    }

    //saida de dados
    alert(`A soma de todos os números pares é ${somaPar}`)
}
