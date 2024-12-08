const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const conexao = require("./database/config/conexao.js");
const tabelas = require("./database/tables.js");

tabelas.init(conexao);
router(app);

app.listen(port, (error) => {
    if (error) {
        console.log("Deu erro");
        return;
    }
    console.log("Servidor escutando...");
});