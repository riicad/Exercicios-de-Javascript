function executar33(){
    //entrada de dados
    let nome = prompt('Digite o nome: ')
    let turno = parseInt(prompt('Digite o turno se é Manha ou tarde? M/T'))

    //processamneto
    if (turno.toUppercase()='M'){
        //saida de dados
        alert(`Bom dia, ${nome}`)
    }
    else{
        //saida de dados
        alert(`Boa tarde, ${nome}`)
    }
}