function executar69(){
    let numero = 0
    let somaNum = 0
    
    //processamento
    for(let i=0; i<5; i++){
        //entrada de dados
        numero = parseInt(prompt(`Digite o ${numero+1}° número: `))
        
        //processameto
        somaNum += numero
    }
    //saida de dados
    alert(`A média dos números é ${somaNum/5}`)
}
