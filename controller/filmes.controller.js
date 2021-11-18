const express = require("express")
const router = express.Router()
const Filmes = require('./../model/Filmes')

router.get('/', (req, res) => {
    res.status(200).json({message: 'Filmes OK'});
});

router.get('/listall', async (req, res) => {
    await Filmes.find({}).then((filmes) => {
        res.status(200).json(filmes);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.get('/listid/:id', async (req, res) => {
    await Filmes.findById(req.params.id).then((filmes) => {
        if(filmes == null) {
            res.status(404).json({message: "Não foi encontrado"});
            return;

        } else {
            res.status(200).json(filmes);
        };
    }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);

        });
});

router.post('/add', async (req,res) => { 

    if(!req.body.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;

    } else if (!req.body.diretor) {
        res.status(400).json({message: "Diretor não informado."});
        return;

    } else if (!req.body.duracao) {
        res.status(400).json({message: "Duração não informado."});
        return;
        
    } else if (!req.body.genero) {
        res.status(400).json({message: "Genero não informado."});
        return;

    } else if (!req.body.imagemUrl) {
        res.status(400).json({message: "Imagem Url não informado."});
        return;

    } else if (!req.body.atores) {
        res.status(400).json({message: "AAtores não informado."});
        return;    
    };

    await Filmes.create(req.body).then(() => {
        res.status(200).json({message: "Cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.put('/update/:id', async (req, res) => {

    if(!req.body.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;

    } else if (!req.body.diretor) {
        res.status(400).json({message: "Diretor não informado."});
        return;

    } else if (!req.body.duracao) {
        res.status(400).json({message: "Duração não informado."});
        return;
        
    } else if (!req.body.genero) {
        res.status(400).json({message: "Genero não informado."});
        return;

    } else if (!req.body.imagemUrl) {
        res.status(400).json({message: "Imagem Url não informado."});
        return;

    } else if (!req.body.atores) {
        res.status(400).json({message: "AAtores não informado."});
        return;    
    };
    
    const id = req.params.id;   
    await Filmes.updateOne({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.delete('/delete/:id', async (req, res) => { 
    await Filmes.deleteOne({ _id: req.params.id }, req.body).then( () => {
        res.status(200).json({message: "Deletado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

module.exports = router;