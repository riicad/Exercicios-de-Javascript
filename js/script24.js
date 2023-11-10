function executar24(){
    //entrada de dadso
    let numero = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))
    let numero3 = parseInt(prompt("Digite o terceiro número: "))
    let primeiro
    let segundo
    let terceiro

    //processamneto
    if (numero>numero2 && numero>numero3 && numero2>numero3){
        primeiro = numero
        segundo = numero2
        terceiro = numero3
    }
    else if((numero>numero2 && numero>numero3 && numero3>numero2)){
        primeiro = numero
        segundo = numero3
        terceiro = numero2  
    }
    else if(numero2>numero && numero2>numero3 && numero>numero3){
        primeiro = numero2
        segundo = numero
        terceiro = numero3
    }
    else if(numero2>numero && numero2>numero3 && numero3>numero){
        primeiro = numero2
        segundo = numero3
        terceiro = numero
    }
    else if(numero3>numero && numero3>numero2 && numero>numero2){
        primeiro = numero3
        segundo = numero
        terceiro = numero2
    }
    else{
        primeiro = numero3
        segundo = numero2
        terceiro = numero
    }

    //saida de dados
    alert(`Em ordem crescente é: ${terceiro}, ${segundo} e ${primeiro}`)
}
