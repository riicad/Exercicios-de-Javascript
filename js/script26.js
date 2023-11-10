function executar26(){
    //entrada de dados
    let codProduto = prompt('Digite o código do produto: ')
    let quantidade = parseInt(prompt("Digite a quantiade que foi comprada: "))
    let preco = parseFloat("Digite o preço do produto: ")

    //processamento
    let totalPagar = quantidade * preco

    //saida de dados
    alert(`Total a ser pago: é ${codProduto}`)
}

