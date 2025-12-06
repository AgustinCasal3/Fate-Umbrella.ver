import express from 'express';
import { Empleado } from '../models/Empleado.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const workers = await Empleado.find();
        res.json(workers);
    } catch ( err ) {
        res.status(500).json({error: 'Error recuperando empleados'});
    }
});

export default router;