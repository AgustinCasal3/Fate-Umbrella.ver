import './Verificacion.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Verificacion() {
    const { token } = useParams();
    const [msg, setMsg] = useState('Verificando...');
    const navigate = useNavigate();

    useEffect(() => {
        async function verify() {
            try {
                const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
                const res = await axios.get(`${backendURL}/verify/${token}`);
                setMsg(res.data.message || 'Cuenta verificada con éxito.');

                setTimeout(() => navigate('/login'), 3000);
            } catch (err: any) {
                setMsg(err?.response?.data.error || 'Error verificando la cuenta.');
            }
        }

        verify();
    }, [token, navigate]);

    return (
        <>
            <Header/>

            <section className="verificacion">
                <div className="mensajes">
                    <h1>{msg}</h1>
                    <br />
                    <p>Si fuiste redirigido: Esperarás a ser llevado a iniciar sesión.</p>
                </div>
            </section>

            <Footer/>
        </>
    )
}