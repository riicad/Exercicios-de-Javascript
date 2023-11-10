function executar72(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let divisor = 0
    let somaDivisor = 0

    //processamento
    for(divisor=numero; divisor>0; divisor--){
        if(numero%divisor===0){
            somaDivisor++
        }
    }

    if (somaDivisor==2){
        //saida de dados
        alert("ELE É PRIMO")
    }
    else{
        //saida de dados
        alert("NÃO É PRIMO")
    }
}