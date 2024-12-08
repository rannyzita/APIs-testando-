class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.createTableAtendimento();
    }

    // criar a database de atendimento
    createTableAtendimento() {
        const sql = `
            create table if not exists atendimento (
	        id int primary key auto_increment,
            data date,
            cliente varchar(45),
            servico varchar(100), 
            status enum("pendente", "cancelado", "realizado") default "pendente"
        );
            `;
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela atendimento");
                console.log(error.message);
                return;
            }
            console.log("Tabela atendimento criada com sucesso.");
        })
    }
}

module.exports = new Tabelas();