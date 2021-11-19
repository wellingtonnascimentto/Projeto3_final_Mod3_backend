const mongoose = require("mongoose");  //importando o mongoose

const seriesModel = new mongoose.Schema({
    nome: { type: String, required: true},
    temporadas: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    trailer: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Series = mongoose.model("Series",seriesModel);

module.exports = Series;