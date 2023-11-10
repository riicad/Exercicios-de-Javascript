function executar06(){
    //Crie um programa que leia um número inteiro e exiba se ele é par ou ímpar.
    //entrada de dados
    let numero = parseInt(prompt("Digite um número: "))

    //processamento
    if ((numero%2==0)) {
        //saida de dados
        alert('Esse número é PAR.')
    }
    else{
        //saida de dados
        alert('Esse número é ÍMPAR.')
    }
}