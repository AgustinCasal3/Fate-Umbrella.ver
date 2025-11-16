import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userId: String,
    username: String,
    email: String,
    number: String,
    description: String,
    picture: String,
    passwordHash: String,
    createdAt: Date,
    lastLogin: Date,
    timePlayed: Number,
    level: Number,
    exp: Number,
    state: Boolean,
    friends: [String]
}, { collection: 'Users' });

export const User = mongoose.model('User', UserSchema);