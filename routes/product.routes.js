const express = require("express");
const ProductService = require("../services/product.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await ProductService.list();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const product = await ProductService.create(req.body);
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const product = await ProductService.update(req.params.id, req.body);
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await ProductService.remove(req.params.id);
        res.json({ message: "Product removed" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;