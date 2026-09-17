let produtos = [];
let proximoId = 1;

// Mostra todos os produtos
function listarProdutos() {
    return produtos;
}

// Procura um produto pelo ID
function buscarProdutoPorId(id) {
    return produtos.find(produto => produto.id === id);
}

// Adiciona um novo produto
function criarProduto(nome, preco) {
    const produto = {
        id: proximoId,
        nome: nome,
        preco: preco
    };

    produtos.push(produto);
    proximoId++;

    return produto;
}

// Atualiza os dados de um produto
function atualizarProduto(id, nome, preco) {
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        return null;
    }

    produto.nome = nome;
    produto.preco = preco;

    return produto;
}

// Remove um produto
function deletarProduto(id) {
    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return null;
    }

    const produto = produtos[indice];

    produtos.splice(indice, 1);

    return produto;
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};