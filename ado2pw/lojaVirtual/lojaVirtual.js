const produtos = [
    {
        produto: "produto A",
        valor: 1.99
    },
    {
        produto: "produto B",
        valor: 2.99
    },
    {
        produto: "produto C",
        valor: 3.99
    },
    {
        produto: "produto D",
        valor: 4.99
    },
    {
        produto: "produto E",
        valor: 5.99
    }
];

function buscarProdutos(event){
    event.preventDefault();
    produtos.forEach(() => {
        encontrar();
    });
}


function encontrar(){
    for (var i = 0; i < produtos.length; i++){
        const numero = produtos[i].valor;
        const formatDecimal = numero * document.getElementById("quantidade").value;
        const roundedNumber = Math.round(formatDecimal * 100) / 100;
        if (produtos[i].produto == document.getElementById("produtos").value){
            document.getElementById("resultado1").innerHTML = "Produto Selecionado: " + produtos[i].produto
            document.getElementById("resultado2").innerHTML = "Valor do Produto: R$" + numero
            document.getElementById("resultado3").innerHTML = "Valor total da Compra: R$" +  roundedNumber
        }
    }
}
