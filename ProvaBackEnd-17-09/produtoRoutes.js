const express = require("express");

const router = express.Router();

const produtoController = require("../controllers/produtoController");

// Rota para criar produto
router.post("/produtos", produtoController.criarProduto);

// Rota para listar produtos
router.get("/produtos", produtoController.listarProdutos);

// Rota para buscar um produto pelo ID
router.get("/produtos/:id", produtoController.buscarProduto);

// Rota para atualizar um produto
router.put("/produtos/:id", produtoController.atualizarProduto);

// Rota para excluir um produto
router.delete("/produtos/:id", produtoController.deletarProduto);

module.exports = router;