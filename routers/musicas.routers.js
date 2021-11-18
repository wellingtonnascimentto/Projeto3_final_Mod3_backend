const express = require ('express');

const router = express.Router();

const Musica = require ("../model/musicas")

router.get("/", (req, res) => {
    res.status(200).json({message: 'Músicas OK'});
});

router.get("/listall/musica", async (req, res) => {
    await Musicas.find({}).then((Musica) => {
        console.log(Musica);
        res.status(200).json({Musica});
    }).catch((err) => {
        res.status(404).json({message:"Musica não encontrada."});
        console.error(err);
    });
});

router.get("/listid/musica/:id", async (req, res) => {
    const id = req.params.id;
    await Musicas;findOne({id:id}).then((Musica) => {
        console.log(Musica);
        if (id == null) {
            res.status(404).json({message: "Música não encontrada."});
            return;
        } else {
        res.status(200).json({index: index});
        };
    }).catch((err) => {
        res.status(404).json({message: "Música não encontrada."});
        console.log(err);
    });
   
});

router.post("/add/musica", async (req, res) => {
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

    await Musicas.crate(req.body).then(() => {
        res.status(200).json({message: "Musica cadastrada com sucesso!"});
    }).catch ((err) => {
        res.status(400).json({message: "Algo saiu mal ao cadastrar música."});
        console.log(err);
    });
});

router.put("/update/musica/:id", async (req, res) => {
    const id = req.params.id;
    
    if(!id){
        res.status(400).json({message: "esta faltando id na URL"});
        return;
    }else if(!req.body.genero){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.duracao){
        res.status(400).json({message: "esta faltando altura"});
        return;
    }
    else if(!req.body.autor){
        res.status(400).json({message: "esta faltando idade"});
        return;
    }
    else if(!req.body.cantor){
        res.status(400).json({message: "esta faltando idade"});
        return;
    }
    else if(!req.body.imagem){
        res.status(400).json({message: "esta faltando idade"});
        return;
    }

    await Musicas.updateOne({_id:id},req.body).then(() => { 
        res.status(200).json({message: "Musica atualizada com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado em musicas"});
    });
});

router.delete("/delete/musica/:id", (req, res) => {
    if( req.params.id.length == 24){
        await Pessoa.deleteOne({_id:req.params.id}).then(() => {
            res.status(200).json({message: "Musica deletada com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado ao deletar musica"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
});

module.exports = router;            