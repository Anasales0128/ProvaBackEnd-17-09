const express = require("express");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

// Permite receber dados em JSON
app.use(express.json());

// Usa as rotas dos produtos
app.use(produtoRoutes);

module.exports = app;