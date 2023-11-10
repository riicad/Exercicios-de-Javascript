function executar75(){
    //entrada de dados
    let primeiro = 0
    let segundo = 0
    let terceiro = 1

    for(let i = 0; i<20; i++){
        //saida de dados
        alert(terceiro)
    
        //processamento
        primeiro = terceiro
        terceiro = primeiro + segundo
        segundo = primeiro
    }
}
