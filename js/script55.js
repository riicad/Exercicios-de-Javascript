function executar55(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let contador = 0
    
    do{
        contador++
        alert(`${numero} x ${contador} = ${numero*contador}`)
    }while(contador<10);
}
