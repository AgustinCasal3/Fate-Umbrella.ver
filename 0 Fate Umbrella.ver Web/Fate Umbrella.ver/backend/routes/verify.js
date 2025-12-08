import express from 'express';
import { User } from '../models/User.js';

const router = express.Router();

router.get('/:token', async (req, res) => {
    const token = req.params.token;

    try {
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).json({ error: 'Token invalido.'});
        }
        
        //Verificar Expiracion
        if (!user.verificationExpires || new Date() > new Date(user.verificationExpires)) {
            return res.status(400).json({ error: 'Token Expirado.'});
        }

        //Activar Cuenta
        user.state = true;
        user.verificationToken = undefined;
        user.verificationExpires = undefined;

        await user.save();

        return res.json({ message: 'Cuenta verificada correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error en el servidor (No se pudo verificar el usuario)' });
    }
});

export default router;