function executar21(){
    let resposta = 'S'
    let maioresIdade
    let menoresIdade
    
    while (resposta=='S') {
        //entrada de dados
        let idade = parseInt(prompt("Digite sua idade: "))
        
        //proccessamento
        if(idade>17){
            maioresIdade ++
        }
        else{
            menoresIdade ++
        }

        //entrada de dados
        resposta = prompt('Quer registrar mais uma pessoa? (S/N) ')
}
    //saida de dados
    alert(`A quantidade de pessoas maiores de idade é ${maioresIdade}`)
    alert(`A quantidade de pessoas menores de idade é ${menoresIdade}`)
}
