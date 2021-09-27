const express = require("express");
const router = express.Router();

const ClothesModel = require("../models").Clothes;

// GET ALL CLOTHES
router.get("/", async (req, res) => {
    let clothes = await ClothesModel.findAll();
    res.json({ clothes });
})

// CREATE A NEW PIECE OF CLOTHING
router.post("/", async (req, res) => {
    let clothes = await ClothesModel.create(req.body);
    res.json({ clothes });
})

// GET CLOTHING DETAILS
router.get("/:id", async (req, res) => {
    let clothes = await ClothesModel.findByPk(req.params.id);
    res.json({ clothes });
})

// UPDATE CLOTHING DETAILS
router.put("/:id", async (req, res) => {
    let clothes = await ClothesModel.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    });
    res.json({ clothes });
});

// DELETE A PIECE OF CLOTHING
router.delete("/:id", async (req, res) => {
    await ClothesModel.destroy({
        where: { id: req.params.id },
    });
    res.json({
        message: `Clothing with id ${req.params.id} was deleted`,
    });
});

module.exports = router;