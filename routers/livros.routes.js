const express = require("express"); 
const router = express.Router(); 
const livrosController = require('./../controller/livros.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota Livros OK!"});
});

router.post("/add", livrosController);

router.get("/listall", livrosController);

router.get("/listid/:id", livrosController);

router.put("/update/:id", livrosController);

router.delete("/delete/:id", livrosController);

module.exports = router;