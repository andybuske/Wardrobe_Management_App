const express = require("express");
const router = express.Router();

const OwnerModel = require("../models").Owner;
const ClothesModel = require("../models").Clothes;

// GET ALL OWNERS
router.get("/", async (req, res) => {
    let owners = await OwnerModel.findAll({ include: ClothesModel });
    res.json({ owners });
})

// CREATE A NEW OWNER
router.post("/", async (req, res) => {
    let owner = await OwnerModel.create(req.body);
    res.json({ owner });
})

// GET OWNERS PROFILE
router.get("/:id", async (req, res) => {
    let owner = await OwnerModel.findByPk(req.params.id, {
        include: [
            ClothesModel
        ],
    });
    res.json({ owner });
})

// UPDATE AN OWNER
router.put("/:id", async (req, res) => {
    let owner = await OwnerModel.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    });
    res.json({ owner });
});

// DELETE AN OWNER
router.delete("/:id", async (req, res) => {
    await OwnerModel.destroy({
        where: { id: req.params.id },
    });
    res.json({
        message: `Owner with id ${req.params.id} was deleted`,
    });
});

// ADD NEW CLOTHING
router.post('/:id/newclothes', async (req, res) => {
    req.body.ownerId = req.params.id
    let clothes = await ClothesModel.create(req.body);
    let owner = await OwnerModel.findByPk(req.params.id, {
        include: [
            { model: ClothesModel}
        ]
    });
    res.json({ owner, clothes })
})

module.exports = router;