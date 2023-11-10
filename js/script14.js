function executar14(){
    //entrada de dados
    let anos = parseInt(prompt("Quantos anos de vida você tem? "))
    let meses = parseInt(prompt("Quantos meses de vida você tem? "))
    let dias = parseInt(prompt("Quantos dias de vida você tem? "))

    //processamento
    let totalDias = (anos*365)+(meses*30)+(dias)

    //saida de dados
    alert(`O total de dias que ele vivei é: ${totalDias}`)
}
