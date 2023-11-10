function executar73(){
        //entrada de dados
        let numero = parseInt(prompt('Digite um número: '))
        let primeiro = 0
        let segundo = 0
        let terceiro = 1

        for(let i = 0; i<numero; i++){
            //saida de dados
            alert(terceiro)
        
            //processamento
            primeiro = terceiro
            terceiro = primeiro + segundo
            segundo = primeiro
        }
}
