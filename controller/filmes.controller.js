const Filmes = require('./../model/filmes');


exports.getListall = async (req, res) => {
    await Filmes.find({}).then((filmes) => {
        res.status(200).json(filmes);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
};

exports.getListid = async (req, res) => {
    await Filmes.findById(req.params.id).then((filmes) => {
        if(req.params.id == null){
            res.status(404).json({message: "a URL está sem ID"})
        }
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
};

exports.postAdd = async (req,res) => { 

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
};

exports.putUpdate = async (req, res) => {

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
};

exports.delDelete = async (req, res) => {
    if( req.params.id.length == 24){
        await Filmes.deleteOne({_id:req.params.id}).then(() => {
            res.status(200).json({message: "Filme deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo deu errado ao deletar o filme"});
        });
    } else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
};

