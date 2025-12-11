import express from 'express';
import { Version } from '../models/Versions.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const versions = await Version.find();
        res.json(versions);
    } catch ( err ) {
        res.status(500).json({ error: 'Error consiguiendo versiones' });
    }
});

router.get('/:version', async (req, res) => {
    const version = req.params.version;

    try {
        const versionData = await Version.findOne({ version: version });
        
        if ( !versionData ) {
            return res.status(404).json({ error: 'Versión no encontrada' });
        }

        res.json(versionData);
    } catch (err) {
        res.status(500).json({ error: 'Error recuperando la versión' });
    }
});

export default router;