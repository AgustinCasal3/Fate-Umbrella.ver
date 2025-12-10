import mongoose from 'mongoose';

const HomeServantSchema = new mongoose.Schema({
    id: String,
    class: String,
    name: String,
    CV: String,
    illustrator: String,
    description: [String],
    npVideo: String,
    sprite: String,
    pfp: String
}, { collection: 'HomeServants' });

export const HomeServant = mongoose.model('HomeServant', HomeServantSchema);