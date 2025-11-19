import express from 'express';
import { UserServant } from '../models/UsersServants.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usersServants = await UserServant.find();
        res.json(usersServants);
    } catch (err) {
        res.status(500).json({ error: 'Hubo un problema al cargar la coleccion Users Servants.' });
    }
});

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const userServants = await UserServant.find({ userId: userId });
        res.json(userServants);
    } catch (err) {
        res.status(500).json({ error: 'Hubo un problema al cargar los servants del usuario.' });
    }
});

export default router;