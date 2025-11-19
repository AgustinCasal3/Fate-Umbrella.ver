import express from 'express';
import { CraftEssence } from '../models/CraftEssences.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const craftEssences = await CraftEssence.find();
        res.json(craftEssences);
    } catch ( err ) {
        res.status(500).json({ error: 'Error consiguiendo Craft Essences' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const craftEssence = await CraftEssence.findOne({ id: id });
        
        if ( !craftEssence ) {
            return res.status(404).json({ error: 'Craft Essence no encontrado' });
        }

        res.json(craftEssence);
    } catch (err) {
        res.status(500).json({ error: 'Error recuperando el Craft Essence' });
    }
});

export default router;