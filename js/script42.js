function executar42(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let contador = 1
    let resultado
    let divisor = 0


    //processamento
    while(numero>=contador){ 
        if (numero%contador===0){
            divisor++
        }     
        contador++
    }
    
    if (divisor===2){
        resultado = 'ELE É PRIMO'
    }
    else{
        resultado = 'NÃO É PRIMO'
    }

    //saida de dados
    alert(resultado)
}