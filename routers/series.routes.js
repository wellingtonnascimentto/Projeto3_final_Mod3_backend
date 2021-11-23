const express = require("express"); //import do express
const router = express.Router(); //define app como express
const SeriesController = require('./../controller/series.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Series OK!"});
});

router.post("/add", SeriesController.postAdd);

router.get("/listall", SeriesController.getListall);

router.get("/listid/:id", SeriesController.getListid);

router.put("/update/:id", SeriesController.putUpdate);

router.delete("/delete/:id", SeriesController.delDelete);

module.exports = router;

