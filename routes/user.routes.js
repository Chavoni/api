const express = require("express");
const UserService = require("..°services/user.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await UserService.list();
        res.json(users);
    } catch (err) {
        res.status(400).json({error: err.message });
    }
});

module.exports = router;