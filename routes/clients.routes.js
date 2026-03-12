const express = require("express");
const ClientService = require("../services/client.service");

const router = express.Router();

// GET - listar clientes
router.get("/", async (req, res) => {
    try {
        const clients = await ClientService.list();
        res.json(clients);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// POST - criar cliente
router.post("/", async (req, res) => {
    try {
        const client = await ClientService.create(req.body);
        res.json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT - atualizar cliente
router.put("/:id", async (req, res) => {
    try {
        const client = await ClientService.update(req.params.id, req.body);
        res.json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE - remover cliente
router.delete("/:id", async (req, res) => {
    try {
        await ClientService.remove(req.params.id);
        res.json({ message: "Client removed" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;