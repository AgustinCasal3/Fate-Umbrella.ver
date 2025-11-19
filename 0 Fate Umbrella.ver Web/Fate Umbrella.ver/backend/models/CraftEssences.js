import mongoose from "mongoose";

const CraftEssenceSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: [String],
    picture: String,
    rank: Number,
    effect: String,
    lvlMax: Number,
    cost: Number,
    baseStats: {
        attack: Number,
        health: Number
    },
    maxStats: {
        attack: Number,
        health: Number
    }
}, { collection: 'CraftEssences' });

export const CraftEssence = mongoose.model('CraftEssence', CraftEssenceSchema);