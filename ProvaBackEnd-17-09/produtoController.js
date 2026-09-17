const produtoModel = require("../models/produtoModel");

// Lista todos os produtos
function listarProdutos(req, res) {
    const produtos = produtoModel.listarProdutos();

    res.status(200).json(produtos);
}

// Busca um produto pelo ID
function buscarProduto(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            mensagem: "ID inválido."
        });
    }

    const produto = produtoModel.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado."
        });
    }

    res.status(200).json(produto);
}

// Cadastra um novo produto
function criarProduto(req, res) {
    const nome = req.body.nome;
    const preco = req.body.preco;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            mensagem: "Informe o nome do produto."
        });
    }

    if (typeof preco !== "number" || preco <= 0) {
        return res.status(400).json({
            mensagem: "Informe um preço válido."
        });
    }

    const produto = produtoModel.criarProduto(
        nome.trim(),
        preco
    );

    res.status(201).json(produto);
}

// Atualiza um produto
function atualizarProduto(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            mensagem: "ID inválido."
        });
    }

    const nome = req.body.nome;
    const preco = req.body.preco;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            mensagem: "Informe o nome do produto."
        });
    }

    if (typeof preco !== "number" || preco <= 0) {
        return res.status(400).json({
            mensagem: "Informe um preço válido."
        });
    }

    const produto = produtoModel.atualizarProduto(
        id,
        nome.trim(),
        preco
    );

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado."
        });
    }

    res.status(200).json(produto);
}

// Exclui um produto
function deletarProduto(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            mensagem: "ID inválido."
        });
    }

    const produto = produtoModel.deletarProduto(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado."
        });
    }

    res.status(200).json({
        mensagem: "Produto excluído com sucesso.",
        produto: produto
    });
}

module.exports = {
    listarProdutos,
    buscarProduto: buscarProduto,
    criarProduto,
    atualizarProduto,
    deletarProduto
};