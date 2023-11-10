function executar71(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let divisor = 0
    //processamneto
    for(divisor=numero; divisor>0; divisor-- ){
        if (numero%divisor==0){
            //saida de dados
            alert(divisor)
        }
    }

}