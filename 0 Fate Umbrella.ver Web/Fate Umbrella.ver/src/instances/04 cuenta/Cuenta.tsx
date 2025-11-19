import './Cuenta.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

import { InfoCuenta } from './components/01 cuenta/InfoCuenta'
import { ServantsCuenta } from './components/02 servantsCuenta/ServantsCuenta'
import { AmigosCuenta } from './components/03 amigosCuenta/AmigosCuenta'

// interface Usuario
// props de cada cosa de la base de datos

export interface Usuario {
    userId: string,
    username: string,
    email: string,
    number: string,
    description: string,
    picture: string,
    passwordHash: string,
    createdAt: Date,
    lastLogin: Date,
    timePlayed: number,
    level: number,
    exp: number,
    state: boolean,
    friends: string[]
}

export function Cuenta() {
    const { username } = useParams<{ username: string }>();

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    async function getUsername(username: string) {
        const res = await axios.get('http://localhost:3001/users/name/' + username);
        return res.data;
    }

    useEffect(() => {
        if (!username) return;

        getUsername(username).then(data => {
            setUsuario(data);
            document.title = data.username + ' | Fate/Umbrella.ver';
        })
        .catch(err => {
            console.error("Error cargando al usuario:", err);
        });
    }, [username]);

    return (
        <>
            <Header/>

            {!usuario && (
                <div className="loading">
                    <h1>Cargando...</h1>
                </div>
            )}

            {usuario && (
                <>
                    <InfoCuenta usuario={usuario} />
                    <ServantsCuenta usuario={usuario} />
                    <AmigosCuenta usuario={usuario} />
                </>
            )}

            <Footer/>
        </>
    )
}