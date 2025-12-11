import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import UserRouter from './routes/users.js';
import CraftEssenceRouter from './routes/craftEssences.js';
import ServantRouter from './routes/servants.js';
import UserServantsRouter from './routes/usersServants.js';
import FateSeriesRouter from './routes/fateSeries.js';
import LoginRouter from './routes/login.js';
import RegisterRouter from './routes/register.js';
import VerifyRouter from './routes/verify.js';
import EmpleadosRouter from './routes/empleados.js';
import HomeServantsRouter from './routes/homeServants.js';
import VersionsRouter from './routes/versions.js';

import { getLocalIP } from './utils/getLocalIP.js'

const app = express();
app.use(cors());
app.use(express.json());

const LOCAL_IP = getLocalIP();
const FRONTEND_PORT = process.env.FRONTEND_PORT || '5173';

process.env.DYNAMIC_FRONTEND_URL = `http://${LOCAL_IP}:${FRONTEND_PORT}`;

console.log(`IP Local: ${LOCAL_IP}`);
console.log(`Frontend URL: ${process.env.DYNAMIC_FRONTEND_URL}`);

app.use('/users', UserRouter);

app.use('/craftEssences', CraftEssenceRouter);

app.use('/servants', ServantRouter);

app.use('/userServants', UserServantsRouter);

app.use('/fateSeries', FateSeriesRouter);

app.use('/login', LoginRouter);

app.use('/register', RegisterRouter);

app.use('/verify', VerifyRouter);

app.use('/empleados', EmpleadosRouter);

app.use('/homeServants', HomeServantsRouter);

app.use('/versions', VersionsRouter);

mongoose.connect(process.env.MONGO_URI)
    .then( () => console.log('Conectado Exitosamente a MongoDB.') )
    .catch( err =>console.error(err) );

app.get('/', (req, res) => {
    res.send('Server funcionando.');
});

app.listen(3001, () => console.log('Backend Listo en localhost:3001'));