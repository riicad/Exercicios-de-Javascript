function executar58(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let primeiro = 0
    let segundo = 0
    let terceiro = 1
    let contador = 0

    //processamento
    do{
        //saida de dados
        alert(terceiro)
        
        //processamento
        primeiro = terceiro
        terceiro = primeiro + segundo
        segundo = primeiro
        contador++

    }while(numero>contador);
}