const mongoose = require("mongoose");

const seriesModel = new mongoose.Schema({ 
    nome: { type: String, required: true },
    qntTemp: { type: Number, required: true },
    genero: { type: String, required: true },
    qntEp: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Serie = mongoose.model("Series", seriesModel);

module.exports = Serie;

