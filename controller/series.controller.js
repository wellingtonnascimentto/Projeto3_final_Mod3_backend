const express = require("express")
const router = express.Router()
const Series = require('./../model/series')

router.get('/', (req, res) => {
    res.status(200).json({message: 'Rota Series OK'});
});

router.get('/listall', async (req, res) => {
    await Series.find({}).then((series) => {
        res.status(200).json(series);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.get('/listid/:id', async (req, res) => {
    await Series.findById(req.params.id).then((series) => {
        if(series == null) {
            res.status(404).json({message: "Não foi encontrado"});
            return;

        } else {
            res.status(200).json(series);
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

    } else if (!req.body.temporadas) {
        res.status(400).json({message: "Temporadas não informada."});
        return;

    } else if (!req.body.genero) {
        res.status(400).json({message: "Genero não informado."});
        return;
        
    } else if (!req.body.qntEp) {
        res.status(400).json({message: "Quantidade de episodios não informado."});
        return;    
    };

    await Series.create(req.body).then(() => {
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

    } else if (!req.body.temporadas) {
        res.status(400).json({message: "Temporadas não informada."});
        return;

    } else if (!req.body.genero) {
        res.status(400).json({message: "Genero não informado."});
        return;
        
    } else if (!req.body.qntEp) {
        res.status(400).json({message: "Quantidade de episodios não informado."});
        return;    
    };
    
    const id = req.params.id;   
    await Series.updateOne({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    if( req.params.id.length == 24){
        await Series.deleteOne({_id:req.params.id}).then(() => {
            res.status(200).json({message: "Serie deletada com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo deu errado ao deletar a Serie"});
        });
    } else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
});

module.exports = router;