import express from 'express';
import { HomeServant } from '../models/HomeServant.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const homeServants = await HomeServant.find();
        res.json(homeServants);
    } catch ( err ) {
        res.status(500).json({error: 'Error recuperando Servants'});
    }
});

router.get('/:class', async (req, res) => {
    const servantClass = req.params.class;

    try {
        const homeServants = await HomeServant.find({ class: servantClass });
        res.json(homeServants);
    } catch ( err ) {
        res.status(500).json({error: 'Error recuperando Servants con clase ', servantClass});
    }
})

export default router;