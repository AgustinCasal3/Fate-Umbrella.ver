import mongoose from "mongoose";
import { User } from "./models/User.js";

// CAMBIÁ ESTA URI por la que usa tu backend real
const MONGO_URI = 'mongodb+srv://Aquwus:fateumbrellaversion@fate-umbrelladb.ydxzfcc.mongodb.net/Fate-UmbrellaDB';

async function fixDates() {
    try {
        console.log("Conectando a MongoDB...");
        await mongoose.connect(MONGO_URI);

        console.log("Buscando usuarios...");
        const users = await User.find();

        if (users.length === 0) {
            console.log("No se encontraron usuarios.");
            process.exit(0);
        }

        const fixedDate = new Date("2025-09-30T00:00:00Z");

        for (const user of users) {
            console.log(`Actualizando fechas para: ${user.username}`);

            user.createdAt = fixedDate;
            user.lastLogin = fixedDate;

            await user.save();
        }

        console.log("\n🎉 Fechas actualizadas correctamente para todos los usuarios.");
        process.exit(0);
    } catch (err) {
        console.error("❌ ERROR:", err);
        process.exit(1);
    }
}

fixDates();
