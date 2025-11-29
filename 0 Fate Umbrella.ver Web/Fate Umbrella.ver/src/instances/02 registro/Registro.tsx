import './Registro.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'
import { InfoRegistro } from './components/01 infoRegistro/InfoRegistro';

export function Registro() {
    document.title = 'Registro | Fate/Umbrella.ver';

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [error, setError] = useState('');
    const [succesMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');

        if (password !== repeat) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
            const res = await axios.post(`${backendURL}/register`, {
                username,
                email,
                password
            });

            setSuccessMsg('Usuario creado. Revisa tu email para activar la cuenta.');
        } catch (err: any) {
            console.error(err);
            setError(err?.response?.data?.error || 'Error registrando al usuario');
        }
    };

    return (
        <>
            <Header/>
            
            <section className="registro">
                <div className="contenedorRegistro">
                    <div className="tituloRegistro">
                        <h1>Bienvenido Aspirante</h1>
                    </div>

                    <div className="formularioRegistro">
                        <form onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />

                            <label>Email</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                            <div className="passwords">
                                <div className="pass">
                                    <label>Password</label>
                                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                                </div>

                                <div className="pass">
                                    <label>Repeat Password</label>
                                    <input type='password' value={repeat} onChange={e => setRepeat(e.target.value)} />
                                </div>
                            </div>

                            {error && <p style={{color: 'red'}}>{error}</p>}
                            {succesMsg && <p style={{color: 'green'}}>{succesMsg}</p>}

                            <button type='submit'>Aplicar</button>
                        </form>
                    </div>
                </div>
                <div className="imagenRegistro"></div>
            </section>

            <InfoRegistro/>

            <Footer/>
        </>
    )
}