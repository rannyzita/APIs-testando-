const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "172.19.184.42",
    port: 3306,
    user: "root",
    password: "310207",
    database: "controle_atendimento"
});

module.exports = conexao;