import { useEffect, useState } from 'react';
import './Titulo.css'

export function Titulo() {

    const [frase, setFrase] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * 6);

        switch (random) {
            case 0:
                setFrase('"No es un deseo propio, es una lección para el mundo que no aprecia la belleza del arte." - Emir');
                break;
            case 1:
                setFrase('"Pomf =3" - XXXX');
                break;
            case 2:
                setFrase('"Aprenderán lo que es un ser divino." - Emir');
                break;
            case 3:
                setFrase('"Los ferrocarriles y la función flecha me convirtieron en lo que soy." - Emir');
                break;
            case 4:
                setFrase('"¿Sabes qué, amigo?" - Emi');
                break;
            default:
                setFrase('"El Líder sabía lo que hacía al crear este ser." - Arnold');
                break;
        }
    }, []);

    return (
        <>
            <section className="titulo">
                <div className="tituloContenido">

                    <div className="tituloImg flotando">
                        <img src="../../../imgs/Home/Titulo/Logo.png" alt="" />
                    </div>

                    <div className="tituloTexto flotando">
                        <h2>{frase}</h2>
                    </div>

                    <div className="tituloButton">
                        <a href="/register">Register Now</a>
                    </div>
                </div>
            </section>
        </>
    )
}
