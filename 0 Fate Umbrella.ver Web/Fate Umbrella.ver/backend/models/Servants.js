import mongoose from "mongoose";

const ServantSchema = new mongoose.Schema({
    servantsId: String,
    name: String,
    class: String,
    rank: Number,
    picture: String,
    front: String,
    stages: [{
        stage: Number,
        name: String
    }],
    baseStats: {
        atk: Number,
        hp: Number,
        npGain: Number
    },
    skills: [{
        name: String,
        type: String,
        effect: String,
        cooldown: Number,
        target: String
    }],
    np: {
        name: String,
        effect: String,
        type: String
    }

}, {collection: 'Servants'});

export const Servant = mongoose.model('Servant', ServantSchema);