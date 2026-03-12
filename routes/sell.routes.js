const express = require("express");
const SellerService = require("../services/seller.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const sellers = await SellerService.list();
        res.json(sellers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const seller = await SellerService.create(req.body);
        res.json(seller);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const seller = await SellerService.update(req.params.id, req.body);
        res.json(seller);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await SellerService.remove(req.params.id);
        res.json({ message: "Seller removed" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;