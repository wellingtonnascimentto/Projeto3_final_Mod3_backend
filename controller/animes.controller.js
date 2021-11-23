const Anime = require('../model/animes');
const Animes = require("../model/animes");

exports.getListall = async (req, res) => {
    await Animes.find({}).then((Anime) => {
        console.log(Anime);
        res.status(200).json(Anime);
    }).catch((err) => {
        res.status(404).json({message:"Nenhum Anime foi encontrado"});
        console.error(err);
    });
};

exports.getListid = async (req, res) => {
    await Animes.findOne({_id:req.params.id}).then((Anime) =>{
        if (Anime == null) {
            res.status(204).json({message: "Anime não encontrado."});
            return;
        }
        res.status(200).json(Anime);   
    }).catch((err) => {
        console.error(err);
    });
};

exports.postAdd = async (req, res) => {

    if(!req.body.titulo){
        res.status(404).json({message:"titulo da requisição Anime está vazia"});
        return;
    };
    if(!req.body.temporadas){
        res.status(404).json({message: "Quantidade de temporadas da requisição Anime está vazia."});
        return;
    };
    if(!req.body.genero){
        res.status(404).json({message: "genero da requisição Anime está vazia."});
        return;
    };
    if(!req.body.qntEp){
        res.status(404).json({message: "Quantidade de episódios da requisição Anime está vazia."});
        return;
    };

    await Animes.create(req.body).then(() => {
        res.status(201).json({message: "Anime cadastrado com sucesso!"})
    }).catch((err) => {
        res.status(400).json({message: "Erro ao criar Anime"});
        console.error(err);
    });
};

exports.putUpdate = async (req, res) => {

    if (req.params.id == null){
        res.status(404).json({message: "id está vazio."})
        return;
    }else if (!req.body.titulo){
        res.status(404).json({message: "Titulo está vazio."})
        return;
    }else if (!req.body.temporadas){
        res.status(404).json({message:"Quantidade de temporadas não informada."})
        return;
    }else if (!req.body.genero){
        res.status(404).json({message: "O genero não foi informado."})
        return;
    }else if (!req.body.qntEp){
        res.status(404).json({message: "A quantidade de Episódios não foi informado."})
        return;
    }

    await Animes.updateOne({_id:req.params.id}, req.body).then(() => {
        res.status(200).json({message: "Anime atualizado com sucesso!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Algo deu errado ao atualizar o Anime."})
    })
   

};

exports.delDelete = async (req, res) => {
    if( req.params.id.length == 24){
        await Animes.deleteOne({_id:req.params.id}).then(() => {
            res.status(200).json({message: "Anime deletado com sucesso."});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado ao deletar Anime"});
        });
    }else{
        res.status(404).json({message: "id precisa ter 24 caracteres"});
    }
};            