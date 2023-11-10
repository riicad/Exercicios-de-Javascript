function executar43(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let contador = 0
    let primeiro = 0
    let segundo = 0
    let terceiro = 1


    //processamento
    while (numero>contador){
        
        alert(terceiro)
        primeiro = terceiro
        terceiro = primeiro + segundo
        segundo = primeiro
        contador++
    }
}