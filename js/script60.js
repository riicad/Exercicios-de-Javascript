function executar60(){
    let contador = 0
    let primeiro = 0
    let segundo = 0
    let terceiro = 1

    do{
        //saida de dados
        alert(terceiro)
        
        //processamento
        primeiro = terceiro
        terceiro = primeiro + segundo
        segundo = primeiro
        contador++

    }while(contador<20);
}