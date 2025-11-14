import { useEffect, useState, useRef } from 'react';
import './Titulo.css'

export function Titulo() {

    const [frase, setFrase] = useState('');

    const imgTituloRef = useRef<HTMLDivElement>(null);
    const textoTituloRef = useRef<HTMLDivElement>(null);

    const [activo, setActivo] = useState(false);

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

        const intervalo = setInterval(() => {
            setActivo(prev => !prev);
        }, 1500);

        return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
        const img = imgTituloRef.current;
        const txt = textoTituloRef.current;
        if (!img || !txt) return;

        if (activo) {
            img.classList.add("animarTitulo");
            img.classList.remove("volverTitulo");

            txt.classList.add("animarTitulo");
            txt.classList.remove("volverTitulo");
        } else {
            img.classList.add("volverTitulo");
            img.classList.remove("animarTitulo");

            txt.classList.add("volverTitulo");
            txt.classList.remove("animarTitulo");
        }
    }, [activo]);

    return (
        <>
            <section className="titulo">
                <div className="tituloContenido">

                    <div className="tituloImg" ref={imgTituloRef}>
                        <img src="../../../imgs/Home/Titulo/Logo.png" alt="" />
                    </div>

                    <div className="tituloTexto" ref={textoTituloRef}>
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
