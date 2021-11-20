const mongoose = require("mongoose");

const animesModel = new mongoose.Schema({ 
    titulo: { type: String, required: true },
    temporadas: { type: Number, required: true },
    genero: { type: String, required: true },
    qntEp: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Anime = mongoose.model("Animes", animesModel);

module.exports = Anime;