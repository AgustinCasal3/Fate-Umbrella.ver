import mongoose from "mongoose";

const FateSeriesSchema = new mongoose.Schema({
    id: String,
    fate: String,
    name: String,
    character: String,
    logo: String,
    link: String
}, { collection: 'FateSeries' });

export const FateSeries = mongoose.model('FateSeries', FateSeriesSchema);