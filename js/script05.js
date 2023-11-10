function executar05(){
    //Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades.
    //entrada de dados
    let precoProduto = parseFloat(prompt("Digite um preço para o Produto: "))
    let quantidade = parseInt(prompt("Digite a quantidade de produtos comprados: "))
    let valorPagar
    let totalValor = precoProduto*quantidade

    //processamento
    if (quantidade>10) {
        valorPagar = totalValor + totalValor*0.10
    }
    else{
        valorPagar = totalValor
    }

    //entrada de dados
    alert(`O valor total a ser pago é: R$${valorPagar.toFixed(2)}`)
}
