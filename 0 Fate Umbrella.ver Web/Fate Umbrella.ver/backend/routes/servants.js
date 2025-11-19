import express from 'express';
import { Servant } from '../models/Servants.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const servants = await Servant.find();
        res.json(servants);
    } catch ( err ) {
        res.status(500).json({ error: 'Error consiguiendo Servants' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const servant = await Servant.findOne({ servantsId: id });
        
        if ( !servant ) {
            return res.status(404).json({ error: 'Servant no encontrado' });
        }

        res.json(servant);
    } catch (err) {
        res.status(500).json({ error: 'Error recuperando el Servant' });
    }
});

export default router;