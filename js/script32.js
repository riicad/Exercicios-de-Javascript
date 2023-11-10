function executar32(){
    //entrada de dados
    let nota = parseFloat(prompt('Digite a nota do aluno: '))
    let classificacao
    
    //processamento
    if (nota>5 && nota<7.5){
        classificacao =  'C'  
    }
    else if(nota>7.5 && nota<8.5){
        classificacao = 'B'
    }
    else if(nota>8.5 && nota<9.5){
        classificacao = 'A'
    }
    else if(nota>9.5){
        classificacao = 'S'
    }
    else{
        classificacao = 'R'
    }

    //saida de dados
    alert(`A classificação da nota ${nota} é ${classificacao}`)
}
