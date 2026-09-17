🎯 Objetivo do DesafioVocê deve desenvolver uma API para o gerenciamento de um cadastro simples (Exemplo: Produtos, Livros ou Usuários - o professor pode definir a entidade aqui). A API deve permitir criar, listar, buscar por ID, atualizar e deletar os registros.🛠️ Requisitos TécnicosPara a execução desta prova, você deve obrigatoriamente utilizar:Runtime: Node.jsFramework Web: ExpressPersistência: Banco de dados em memória (utilize um Array JavaScript dentro do seu Model).Arquitetura: Padrão Estrutural MVC.📂 Estrutura de Pastas EsperadaA sua aplicação deve respeitar a separação de responsabilidades do padrão MVC. Certifique-se de organizar o seu código de forma semelhante à estrutura abaixo:text├── src/
│   ├── config/          # Configurações do app (se necessário)
│   ├── controllers/     # Lógica de controle e manipulação das requisições
│   ├── models/          # Entidade de dados e métodos de simulação do banco (Array)
│   ├── routes/          # Definição das rotas e endpoints da API
│   └── app.js           # Inicialização do Express e middlewares
├── package.json         # Dependências e scripts do projeto
└── server.js            # Ponto de entrada (Entrypoint) para rodar o servidor
Use o código com cuidado.🛣️ Rotas e Endpoints (CRUD)A sua API deve expor os seguintes endpoints HTTP retornando respostas em formato JSON:MétodoEndpointDescriçãoStatus EsperadoPOST/produtosCria um novo registro201 CreatedGET/produtosLista todos os registros cadastrados200 OKGET/produtos/:idRetorna um registro específico baseado no ID200 OK ou 404 Not FoundPUT/produtos/:idAtualiza os dados de um registro existente200 OK ou 404 Not FoundDELETE/produtos/:idRemove um registro do banco em memória200 OK ou 404 Not Found📋 Instruções de EntregaFaça um Fork deste repositório para a sua conta pessoal do GitHub/GitLab.Clone o seu fork localmente:bashgit clone <url-do-seu-repositorio>
Use o código com cuidado.Inicialize o projeto e instale as dependências necessárias (express e, opcionalmente, nodemon como dependência de desenvolvimento):bashnpm init -y
npm install express
npm install --save-dev nodemon
Use o código com cuidado.Desenvolva a solução garantindo que cada commit represente uma etapa lógica do desenvolvimento (ex: "Feat: implementando rota POST", "Fix: correção no tratamento de erro do GET").Após finalizar, faça o push para o seu repositório remoto e envie o link na plataforma de entrega indicada pelo professor.
