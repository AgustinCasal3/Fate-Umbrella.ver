import express from 'express';
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "clave-super-secreta";

router.post('/', async (req, res) => {
    const { login, password } = req.body;

    try {
        const user = await User.findOne({
            $or: [
                { email: login },
                { username: login }
            ]
        });

        if ( !user ) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }
        
        const passOk = await bcrypt.compare(password, user.passwordHash);
        if (!passOk) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }

        const token = jwt.sign(
            { userId: user.userId, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        user.lastLogin = new Date();
        await user.save();

        res.json({
            message: 'Login exitoso',
            token,
            user: {
                userId: user.userId,
                username: user.username,
                email: user.email,
                number: user.number,
                description: user.description,
                picture: user.picture,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin,
                timePlayed: user.timePlayed,
                level: user.level,
                exp: user.exp,
                state: user.state,
                friends: user.friends
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

export default router;