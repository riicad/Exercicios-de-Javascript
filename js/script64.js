function executar64(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let fatorial = 1 

    //processamento
    do{
        fatorial *= numero
        numero--
    }while(numero>0);
    
    //saida de dados
    alert(`O factorial de ${fatorial} de ${fatorial}`)
}
