const routerAtendimento = require("./atendimentoRoutes.js");

module.exports = (app) => {
    app.use(routerAtendimento);
}