function executar57(){
    //entrada de dados
    let numero = parseInt(prompt(`Digite um número: `))
    let contador = 1
    let resultado
    
    //processamento
    do{
        if (numero%contador===0){
            divisor++
        }     
        contador++
    }while(contador<numero);
    
    if (divisor===2){
        resultado = 'ELE É PRIMO'
    }
    else{
        resultado = 'NÃO É PRIMO'
    }

    //saida de dados
    alert(resultado)
}