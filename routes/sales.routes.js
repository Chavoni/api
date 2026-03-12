const express = require("express");
const SaleService = require("../services/sale.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const sales = await SaleService.list();
        res.json(sales);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const sale = await SaleService.create(req.body);
        res.json(sale);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const sale = await SaleService.update(req.params.id, req.body);
        res.json(sale);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await SaleService.remove(req.params.id);
        res.json({ message: "Sale removed" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;