import './Login.css'
import axios from 'axios';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Login() {
    document.title = "Login | Fate/Umbrella.ver";

    const [loginField, setLoginField] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
            const res = await axios.post(`${backendURL}/login`, {
                login: loginField, 
                password
            });
            
            const token = res.data.token;
            const user = res.data.user;

            //Funcion de AuthContext + localStorage
            login(token, user);

            //Redirigir a su cuenta
            navigate(`/account/${user.username}`);
        
        } catch (err: any) {
            setErrorMsg("Email o contraseña incorrectos");
        }
    };

    return (
        <>
            <Header></Header>
            <section className="login">
                <div className="contenedorLogin">
                    <div className="imagenLogin"></div>

                    <div className="formularioLogin">
                        <h1>Bienvenido de vuelta, Master!</h1>

                        <form onSubmit={handleSubmit}>
                            <label>Email o Username</label>
                            <input 
                                type="text"
                                value={loginField}
                                onChange={(e) => setLoginField(e.target.value)}
                            />
                            
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}

                            <button type='submit'>Login</button>
                        </form>
                        <p>Olvidaste tu contraseña? <a href="">Recuperar Contraseña</a></p>
                        <p>No tenes una cuenta? <a href="/register">Registrarse Ahora</a></p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}