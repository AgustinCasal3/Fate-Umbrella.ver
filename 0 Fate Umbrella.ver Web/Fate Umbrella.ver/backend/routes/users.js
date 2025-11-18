import express from 'express';
import { User } from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch ( err ) {
        res.status(500).json({error: 'Error recuperando usuarios'});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findOne({ userId: id });
        
        if ( !user ) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({error: 'Error recuperando el usuario'});
    }
});

router.get('/name/:user', async (req, res) => {
    const username = req.params.user;

    try {
        const user = await User.findOne({ username: username });
        
        if ( !user ) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({error: 'Error recuperando el usuario'});
    }
});

export default router;