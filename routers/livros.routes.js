const express = require("express"); 
const router = express.Router(); 
const livrosController = require('./../controller/livros.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota Livros OK!"});
});

router.post("/add", livrosController.postAdd);

router.get("/listall", livrosController.getListall);

router.get("/listid/:id", livrosController.getListid);

router.put("/update/:id", livrosController.putUpdate);

router.delete("/delete/:id", livrosController.delDelete);

module.exports = router;

