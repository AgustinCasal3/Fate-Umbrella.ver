
import { useState, useEffect } from 'react';
import './InfoCuenta.css'

interface InfoCuentaProps {
    usuario: {
        username: string;
        picture: string;
        level: number;
        exp: number;
        description: string;
    };
}

export function InfoCuenta({ usuario }: InfoCuentaProps) {
    const [porcentajeExp, setPorcentajeExp] = useState(0);

    useEffect(() => {
        const porcentaje = (((usuario.exp * 1000) / 5000) / 10);

        console.log(porcentaje);

        setTimeout(() => {
            setPorcentajeExp(porcentaje);
        }, 200);
    }, [usuario]);

    return (
        <>
            <section className="cuenta">
                <div className="contenedorCuenta">
                    <img src={`../../../imgs/Cuenta/Pfp/${usuario.picture}`} alt={`Foto de perfil de ${usuario.username}`} />
                    <div className="infoCuenta">
                        <h1>
                            {usuario.username}
                        </h1>
                        <div className="progresoNivel">
                            <div className="barraNivel">
                                <div 
                                    className="barraRelleno" 
                                    style={{ width: porcentajeExp + '%'}}
                                ></div>
                            </div>
                            <div className="numeroNivel">
                                <span>{usuario.level}</span>
                            </div>
                        </div>
                        <div className="bioCuenta">
                            <p>"{usuario.description}"</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}