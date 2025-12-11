import { useState } from 'react';
import { createPortal } from 'react-dom';

import './carruselInfoServant.css';

interface ServantInfo {
    id: string,
    class: string,
    name: string,
    CV: string,
    illustrator: string,
    description: string[],
    npVideo: string,
    sprite: string,
    pfp: string
}

interface CarruselInfoServantProps {
    servant: ServantInfo;
}

export function CarruselInfoServant({ servant }: CarruselInfoServantProps) {
    const [videoExpandido, setVideoExpandido] = useState(false);

    return (
        <>
            <div className="carruselInfoServant">
                <div className="textoInfoServant">
                    <div className="espaciadorInfoServant"></div>

                    <h1>{servant.name}</h1>

                    <h2>CV: {servant.CV}</h2>
                    <h2>Illustrator: {servant.illustrator}</h2>
                    <br />
                    {servant.description.map((texto, index) => (
                        <h3 key={index}>{texto}</h3>
                    ))}

                    <div className="contenedorIframe" onClick={() => setVideoExpandido(true)}>

                        {/* ▶ Thumbnail + Botón personalizado */}
                        {!videoExpandido && (
                            <>
                                <img
                                    className="thumbnailNP"
                                    src={`https://img.youtube.com/vi/${servant.npVideo}/maxresdefault.jpg`}
                                    alt="Thumbnail"
                                />

                                <div className="botonPlayPersonalizado"></div>
                            </>
                        )}

                    </div>

                </div>

                <div className="imagenInfoServant">
                    <img src={`../../../../../imgs/Home/Servants/Sprites/${servant.sprite}.png`} alt={servant.name} />
                </div>
            </div>

            {/* ← CAMBIO: Usa createPortal para renderizar fuera del DOM */}
            {videoExpandido && createPortal(
                <div className="modalVideo" onClick={() => setVideoExpandido(false)}>
                    <div className="contenedorVideoExpandido" onClick={(e) => e.stopPropagation()}>
                        <iframe 
                            src={`https://www.youtube.com/embed/${servant.npVideo}?autoplay=1`}
                            title={`Noble Phantasm ${servant.name}`}
                            allow="autoplay"
                        ></iframe>
                    </div>
                </div>,
                document.body // ← Renderiza directamente en el body
            )}
        </>
    )
}