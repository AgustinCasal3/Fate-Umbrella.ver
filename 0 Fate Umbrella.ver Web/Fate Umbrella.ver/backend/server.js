import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import UserRouter from './routes/users.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', UserRouter)

mongoose.connect(process.env.MONGO_URI)
    .then( () => console.log('Conectado Exitosamente a MongoDB.') )
    .catch( err =>console.error(err) );

app.get('/', (req, res) => {
    res.send('Server funcionando.');
});

app.listen(3001, () => console.log('Backend Listo en localhost:3001'));