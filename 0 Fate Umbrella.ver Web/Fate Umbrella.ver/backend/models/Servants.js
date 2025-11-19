import mongoose from "mongoose";

const StageSchema = {
    stage: Number,
    name: String
};

const SkillSchema = {
    name: String,
    type: String,
    effect: String,
    cooldown: Number,      // Puede ser null en tu DB
    target: String
};

const PassiveSchema = {
    name: String,
    effect: String
};

// Overcharge puede ser:
// - boolean
// - objeto con { duration }
// - objeto con arrays
// - objetos arbitrarios
// Así que lo dejamos flexible
const OverchargeSchema = mongoose.Schema.Types.Mixed;

const NpSchema = {
    name: String,
    effect: String,
    type: String,
    overcharge: OverchargeSchema
};

const BaseStatsSchema = {
    atk: Number,
    hp: Number,
    npGain: Number   // en tu DB a veces es null
};

const ServantSchema = new mongoose.Schema({
    servantsId: String,
    name: String,
    class: String,    // Tu colección usa "class"
    rank: Number,
    picture: String,
    front: String,

    stages: [StageSchema],

    baseStats: BaseStatsSchema,

    skills: [SkillSchema],

    passives: [PassiveSchema],

    np: NpSchema,

    craftEsenceSlot: mongoose.Schema.Types.Mixed // siempre null por ahora, pero flexible
}, { collection: "Servants" });

export const Servant = mongoose.model("Servant", ServantSchema);
