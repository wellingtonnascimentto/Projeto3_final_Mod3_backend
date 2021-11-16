const express = require ('express');

const router = express.Router();

let listaMusicas = [];

router.get("/", (req, res) => {
    res.status(200).json({message: 'Músicas OK'});
});

router.get("/listall/musica", (req, res) => {
    res.status(200).json({listaMusicas});
});

router.get("/listall/musicaIndex/:id", (req, res) => {
    const id = req.params.id;
    const index = listaMusicas[id]
    if (index == -1){
        res.status(204).json({message: "Música não encontrada."});
        return;
    }
    res.status(200).json({index: index});   
});

router.post("/add/musica", (req, res) =>     {
    const musica = req.body;

    if(!musica.genero){
        res.status(404).json({message:"Genero da requisição música está vazio"});
        return;
    };
    if(!musica.duracao){
        res.status(404).json({message: "Duração da requisição música está vazia."});
        return;
    };
    if(!musica.autor){
        res.status(404).json({message: "Autor da requisição música está vazio."});
        return;
    };
    if(!musica.cantor){
        res.status(404).json({message: "Cantor da requisição música está vazio."});
        return;
    };
    if(!musica.imagem){
        res.status(404).json({message: "Imagem da requisição música está vazia."});
        return;
    };

    listaMusicas.push(musica);
    res.status(201).json({message: "Música cadastrada com sucesso!"})
});

router.put("/update/musica/:id", (req, res) => {
    const id = req.params.id;
    const musica = listaMusicas[id];

    console.log(musica);

    listaMusicas[id] = req.body;

    res.status(200).json(listaMusicas[id]);
});

router.delete("/delete/musica/:id", (req, res) => {
    const id = req.params.id;
    listaMusica.splice(id, 1);
    res.json(listaMusica);
});

module.exports = router;            