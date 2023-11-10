function executar56(){
    //entrada de dados
    let numero = parseInt(prompt('Digite um número: '))
    let contador = 0

    //processamento
    do{
        contador++
        if (numero%contador==0){
            alert(contador)
        }
    }while(contador!=numero);
}