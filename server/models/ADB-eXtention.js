const express = require('express');
const router = express.Router();
const Investment = require('../models/Investment'); // Importiert das erstellte Datenmodell

// @route   GET /api/investments
// @desc    Alle Investments abrufen
// @access  Public (wird später auf Private/Auth geändert)
router.get('/', async (req, res) => {
    try {
        const investments = await Investment.find().sort({ name: 1 });
        res.json(investments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Fehler beim Abrufen der Investments.');
    }
});

// @route   POST /api/investments
// @desc    Neues Investment hinzufügen
// @access  Public
router.post('/', async (req, res) => {
    const { symbol, name, quantity, averagePrice } = req.body;

    try {
        // Prüft, ob das Investment bereits existiert (Symbol muss einzigartig sein)
        let investment = await Investment.findOne({ symbol });

        if (investment) {
            return res.status(400).json({ msg: 'Investment mit diesem Symbol existiert bereits.' });
        }

        investment = new Investment({
            symbol,
            name,
            quantity: quantity || 0,
            averagePrice: averagePrice || 0
        });

        await investment.save();
        res.json(investment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Fehler beim Hinzufügen des Investments.');
    }
});

module.exports = router;