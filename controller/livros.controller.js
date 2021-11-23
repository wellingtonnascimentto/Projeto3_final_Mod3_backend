const Livro = require('../model/livros');
const Livros = require("../model/livros");

exports.getListall = async (req, res) => {
    await Livros.find({}).then((Livro) => {
        console.log(Livro);
        res.status(200).json(Livro);
    }).catch((err) => {
        res.status(404).json({message:"Nenhum livro foi encontrado"});
        console.error(err);
    });
};

exports.getListid = async (req, res) => {
    await Livros.findOne({_id:req.params.id}).then((Livro) =>{
        if (Livro == null) {
            res.status(204).json({message: "Livro não encontrado."});
            return;
        }
        res.status(200).json(Livro);   
    }).catch((err) => {
        console.error(err);
    });
    
   
};

exports.postAdd = async (req, res) => {

    if(!req.body.titulo){
        res.status(404).json({message:"titulo da requisição Livro está vazia"});
        return;
    };
    if(!req.body.autor){
        res.status(404).json({message: "autor da requisição Livro está vazia."});
        return;
    };
    if(!req.body.genero){
        res.status(404).json({message: "genero Mae da requisição Livro está vazia."});
        return;
    };
    if(!req.body.capitulos){
        res.status(404).json({message: "capitulos da requisição Livro está vazia."});
        return;
    };

    await Livros.create(req.body).then(() => {
        res.status(201).json({message: "Livro cadastrado com sucesso!"})
    }).catch((err) => {
        res.status(400).json({message: "Erro ao criar Livro"});
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
    }else if (!req.body.autor){
        res.status(404).json({message:"Autor não informado."})
        return;
    }else if (!req.body.genero){
        res.status(404).json({message: "O genero não foi informado."})
        return;
    }else if (!req.body.capitulos){
        res.status(404).json({message: "Os capitulos não foram informados."})
        return;
    }

    await Livros.updateOne({_id:req.params.id}, req.body).then(() => {
        res.status(200).json({message: "Livro atualizado com sucesso!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Algo deu errado ao atualizar o Livro."})
    })
    console.log(Livro);

};

exports.delDelete = async (req, res) => {
    if( req.params.id.length == 24){
        await Livros.deleteOne({_id:req.params.id}).then(() => {
            res.status(200).json({message: "Livro deletado com sucesso."});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado ao deletar Livro"});
        });
    }else{
        res.status(404).json({message: "id precisa ter 24 caracteres"});
    }
};            