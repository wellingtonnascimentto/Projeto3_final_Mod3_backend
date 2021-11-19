const express = require("express"); //import do express
const router = express.Router(); //define app como express
const SeriesController = require('./../controller/series.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Series OK!"});
});

router.post("/add", SeriesController);

router.get("/listall", SeriesController);

router.get("/listid/:id", SeriesController);

router.put("/update/:id", SeriesController);

router.delete("/delete/:id", SeriesController);

module.exports = router;