import axios from 'axios'
import './AmigosCuenta.css'
import { useEffect, useState } from 'react';

// interface usuarioAmigo
interface UserAmigos {
    usuario: {
        friends: string[];
    }
}

interface UsuarioCompleto {
    username: string;
    picture: string;
    level: number;
    exp: number;
}

export function AmigosCuenta({ usuario }: UserAmigos) {
    const friends = usuario.friends;

    const [amigosData, setAmigosData] = useState<UsuarioCompleto[]>([]);

    async function getUserById(id: string) {
        try {
            const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
            const res = await axios.get(`${backendURL}/users/${id}`);
            return res.data ?? null;  // si no existe, devuelve null
        } catch (err) {
            console.warn("Usuario no encontrado:", id);
            return null; // devolvemos null para poder filtrarlo después
        }
    }

    useEffect(() => {
        let mounted = true;

        async function fetchAmigos() {
            try {
                const data = await Promise.all(friends.map(id => getUserById(id)));
                
                const filtrados = data.filter(amigo => amigo !== null);

                if (mounted) setAmigosData(filtrados);
            } catch (err) {
                console.error("Error cargando amigos:", err);
            }
        }

        if (friends && friends.length > 0) {
            fetchAmigos();
        } else {
            setAmigosData([]); // limpia si no hay amigos
        }

        return () => { mounted = false; };
    }, [friends]);

    console.log("Friends recibidos:", friends);

    return (
        <>
            <section className="amigosCuenta">
                <div className="contenedorAmigosCuenta">
                    <h2>Amigos:</h2>

                    <div className="listaAmigosCuenta">
                        <div className="contenedorListaAmigosCuenta">

                            {amigosData.length === 0 && (
                                <p className="sinAmigos">~ Este usuario no tiene amigos (válidos 🥺) ~</p>
                            )}

                            {amigosData.map(amigo =>
                                <a href={`${amigo.username}`}>
                                    <div className="tarjetaAmigoCuenta" key={amigo.username}>
                                        <div className="contenidoTarjetaAmigoCuenta">
                                            <div className="imgAmigoCuenta">
                                                <img src={`../../../imgs/Cuenta/Pfp/${amigo.picture}`} alt={`Foto de ${amigo.username}`} />
                                            </div>
                                            <div className="infoAmigoCuenta">
                                                <span>{amigo.username}</span>
                                                <div className="nivelAmigoCuenta">
                                                    <div 
                                                        className="barraNivelAmigoCuenta">
                                                            <div 
                                                                className="progresoNivelAmigoCuenta"
                                                                style={{
                                                                    width: (((amigo.exp * 1000) / 5000) / 10) + '%'
                                                                }}
                                                            ></div>
                                                        </div>
                                                    <div className="numeroNivelAmigoCuenta">
                                                        <span>{amigo.level}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}