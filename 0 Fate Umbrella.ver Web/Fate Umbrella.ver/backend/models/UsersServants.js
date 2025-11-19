import mongoose from 'mongoose';

const UserServantSchema = new mongoose.Schema({
    userId: String,
    servantId: String,
    level: Number,
    exp: Number,
    ascension: Number,
    skillsLevel: {
        skill1: Number,
        skill2: Number,
        skill3: Number
    },
    craftEssenceId: Number
}, {collection: 'UsersServants'});

export const UserServant = mongoose.model('UserServant', UserServantSchema);