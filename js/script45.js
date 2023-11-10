function executar44(){
    let contador =0 
    let primeiro = 0
    let segundo = 0 
    let terceiro = 1
    
    while (20>contador){
        //saida de dados
        alert(terceiro)
        
        //processamento
        primeiro = terceiro
        terceiro = primeiro + segundo
        segundo = primeiro
        contador++
    }
}