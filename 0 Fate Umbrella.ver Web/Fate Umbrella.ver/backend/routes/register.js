import express from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { User } from '../models/User.js';
import { sendVerificationEmail } from '../utils/mailer.js';

const router = express.Router();
const SALT_ROUNDS = 10;

router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if ( !username || !email || !password ) {
            return res.status(400).json({ error: 'Faltan datos obligatorios.' });
        }

        //Verificar si ya esta registrado
        const exists = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (exists) return res.status(409).json({ error: 'Usuario o email ya registrado' });

        //Hashear contraseña
        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        //Generar token verificacion
        const token = crypto.randomBytes(24).toString('hex');
        const expires = new Date();
        expires.setHours(expires.getHours() + 24); //Expira en 24hs

        //Consigo los usuarios para la ID nueva
        const usersArray = await User.find();

        //Crear user con state == false
        const newUser = new User({
            userId: (usersArray.length + 1),
            username,
            email,
            number: null,
            description: '',
            picture: 'PLACEHOLDER.png',
            passwordHash,
            createdAt: new Date(),
            lastLogin: null,
            timePlayed: 0,
            level: 1,
            exp: 0,
            state: false,
            friends: [],
            verificationToken: token,
            verificationExpires: expires
        });

        await newUser.save();

        //Enviar email de verificacion
        try {
            await sendVerificationEmail(email, token, username);
        } catch (mailErr) {
            console.error('Error enviando email: ', mailErr);
            return res.status(500).json({ error: 'No se pudo enviar mail de verificacion.' });
        }

        return res.status(201).json({ message: 'Usuario creado. Revisa tu email para activar la cuenta' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error en el servidor.' });
    }
});

export default router;