import express from 'express';
import { FateSeries } from '../models/FateSeries.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const FateSeriesAll = await FateSeries.find();
        res.json(FateSeriesAll);
    } catch ( err ) {
        res.status(500).json({ error: 'Error consiguiendo todo el contenido de Fate' });
    }
});

router.get('/umbrella', async (req, res) => {
    try {
        const FateSeriesUmbrella = await FateSeries.find({fate: 'Umbrella'});
        res.json(FateSeriesUmbrella);
    } catch ( err ) {
        res.status(500).json({ error: 'Error consiguiendo los capitulos de Fate Umbrella' });
    }
});

router.get('/fate', async (req, res) => {
    try {
        const FateSeriesOther = await FateSeries.find({fate: 'Fate'});
        res.json(FateSeriesOther);
    } catch ( err ) {
        res.status(500).json({ error: 'Error consiguiendo las historias recomendadas' });
    }
});

export default router;