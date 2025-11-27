import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from './models/User.js';

const SALT_ROUNDS = 10;

const MONGO_URI = 'mongodb+srv://Aquwus:fateumbrellaversion@fate-umbrelladb.ydxzfcc.mongodb.net/Fate-UmbrellaDB';

async function migrate() {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);

        console.log("Buscando usuarios...");
        const users = await User.find();

        for (const user of users) {
            const pass = user.passwordHash;

            //Si es un bcrypt, empieza con $2
            if (typeof pass === 'string' && pass.startsWith('$2')) {
                console.log(`${user.username}: ya tiene la contraseña hasheada.`);
                continue;
            }

            //Si es texto plano, la haseamos
            console.log(`Hasheando contraseña de ${user.username}...`);

            const hashed = await bcrypt.hash(pass, SALT_ROUNDS);
            user.passwordHash = hashed;
            await user.save();

            console.log(`${user.username}: Hash actualizado!`);
        }

        console.log('Migracion completa !!!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

migrate();