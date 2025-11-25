import './ServantsCuenta.css'

import axios from 'axios'

import { ServantListaServants } from './01 servantListaServants/ServantListaServants'
import { ServantSeleccionado } from './02 servantSeleccionado/ServantSeleccionado'
import { useEffect, useRef, useState } from 'react'

interface InfoCuentaId {
    usuario: {
        userId: string
    };
}

interface UserServant {
    userId: string,
    servantId: string,
    level: number,
    exp: number,
    ascension: number,
    skillsLevel: {
        skill1: number,
        skill2: number,
        skill3: number
    },
    craftEssenceId: string | null,
    stageSelected: string
}

interface ServantBase {
    servantsId: string,
    name: string,
    class: string,
    rank:number,
    picture: string,
    front: string,
    baseStats: {
        atk: number,
        hp: number,
        npGain: number,
    }
}


interface CombinedServant {
    userData: UserServant,
    baseData: ServantBase
}

export function ServantsCuenta({usuario}: InfoCuentaId) {

    const userId = usuario.userId; 
    
    const [servants, setServants] = useState<CombinedServant[]>([]);
    
    const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;

    // fetch para encontrar los user servants
    async function getUserServants(userId: string) {
        const res = await axios.get(`${backendURL}/userServants/${userId}`);
        return res.data;
    }

    // fetch para encontrar cada servant con el user servants
    async function getServantBase(id: string) {
        const res = await axios.get(`${backendURL}/servants/${id}`)
        return res.data;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const userServantsData = await getUserServants(userId);

                const fullCombined = await Promise.all(
                    userServantsData.map(async (us: UserServant) => {
                        const servantBase = await getServantBase(us.servantId);
                        return {
                            userData: us,
                            baseData: servantBase
                        };
                    })
                );

                setServants(fullCombined);
            } catch (err) {
                console.error('Error cargando servants:', err)
            }
        };

        fetchData();
    }, [userId]);

    //SCROLL LATERAL FLECHAS

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -275,   // cantidad a scrollear
                behavior: "smooth"
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 275,
                behavior: "smooth"
            });
        }
    };

    //SERVANT SELECCIONADO

    const [selectedServant, setSelectedServant] = useState<CombinedServant | null>(null);


    return (
        <>
            <section className="servantsCuenta">

                <div className="contenedorServantsCuenta">
                    <h2>Servants</h2>
                    <div className="listaServantsCuenta">
                        {servants.length >= 6 ? (
                            <div className="flechaListaServants flechaInvertidaHorizontal" onClick={scrollLeft}></div>
                        ) : null}

                        <div className="tarjetasServants" ref={scrollRef}>
                            {servants.length === 0 ? (
                                <h1>Este usuario no posee servants aún</h1>
                            ) : (
                                <ServantListaServants
                                    servants={servants}
                                    onSelect={(servant) => {
                                        console.log("Seleccionado:", servant);
                                        setSelectedServant(servant);
                                    }}
                                />
                            )}
                        </div>

                        {servants.length >= 6 ? (
                            <div className="flechaListaServants" onClick={scrollRight}></div>
                        ) : null}
                    </div>
                </div>

                <ServantSeleccionado servant={selectedServant} />

            </section>
        </>
    )
}