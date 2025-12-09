import { useEffect, useState } from 'react';
import './ServantSeleccionado.css'

import axios from "axios";

//Interface Craft Essence
interface CraftEssence {
    craftEssenceId: string;
    name: string;
    effect: string;
    picture: string;
    rank: number;
}

// interface servant Usuario
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

interface Props {
    servant: CombinedServant | null;
}

export function ServantSeleccionado({ servant }: Props) {

    //Craft Essence
    const [craftEssence, setCraftEssence] = useState<CraftEssence | null>(null);

    async function getCraftEssenceById(id: string) {
        const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
        const response = await axios.get(`${backendURL}/craftEssences/${id}`);
        return response.data;
    }

    useEffect(() => {
        async function fetchCraft() {
            if (servant?.userData.craftEssenceId) {
                const data = await getCraftEssenceById(servant.userData.craftEssenceId);
                setCraftEssence(data);
            } else {
                setCraftEssence(null);
            }
        }

        fetchCraft();
    }, [servant]);

    //Servant

    if (!servant) {
        return (
            <div className="noHayServant">
                <h1>No hay ningún servant seleccionado</h1>
            </div>
        );  
    }

    return (
        <>
            <div className="contenedorContenidoServantSeleccionado">
                <div className="contenidoServantSeleccionado">

                    {/* TITULO */}
                    <div className="tituloServantSeleccionado">
                        <div className="izqTituloServant">
                            <img src={`../../../imgs/Cuenta/Clases/${servant.baseData.class}.png`} alt={servant.baseData.class} />
                            <h1>{servant.baseData.class} - {servant.baseData.name}</h1>
                        </div>

                        {/* ESTRELLAS */}
                        {(servant.baseData.rank != 0) ? (
                            <div className="derTituloServant">
                                <div className="estrellasServant">
                                    {[...Array(servant.baseData.rank)].map((_, i) => (
                                        <img 
                                        key={i} 
                                        src="../../../imgs/Cuenta/Estrellas/Estrella.png" 
                                        alt="Estrella"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (null)}
                    </div>

                    {/* INFO SERVANT SELECCIONADO */}

                    <div className="infoServantSeleccionado">

                        {/* IMAGEN PRINCIPAL */}
                        <div className="portadaImagenServant">
                            <img src={`../../../imgs/Cuenta/Portadas/${servant.baseData.front}${servant.userData.stageSelected}.png`}
                                 alt={servant.baseData.name} />
                        </div>

                        <div className="statsServantSeleccionado">
                            <div className="ataqueServant">
                                <h2>------- Ataque -------</h2>
                                <div className="ataqueServantValores">
                                    <div className="ataqueBase">
                                        <h3>Base</h3>
                                        <p>{servant?.baseData?.baseStats?.atk}</p>
                                    </div>
                                    <div className="ataqueActual">
                                        <h3>Actual</h3>
                                        <p>5000</p>
                                    </div>
                                    <div className="ataqueMaximo">
                                        <h3>Maximo</h3>
                                        <p>12700</p>
                                    </div>
                                </div>
                            </div>

                            <div className="vidaServant">
                                <h2>--------- Vida ---------</h2>
                                <div className="vidaServantValores">
                                    <div className="vidaBase">
                                        <h3>Base</h3>   
                                        <p>{servant?.baseData?.baseStats?.hp}</p>
                                    </div>
                                    <div className="vidaActual">
                                        <h3>Actual</h3>
                                        <p>6000</p>
                                    </div>
                                    <div className="vidaMaximo">
                                        <h3>Maximo</h3>
                                        <p>12000</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className='nombreCraftEssence'>Craft Essence</h2>
                            {craftEssence ? (
                                <div className="infoCraftEssence">
                                    <div className="imgCraftEssence">
                                        <img
                                            src={`../../../imgs/Cuenta/CraftEssence/${craftEssence.picture}`}
                                            alt={craftEssence.name}
                                        />
                                    </div>

                                    <div className="textoCraftEssence">
                                        <div className="tituloCraftEssence">
                                            <h2>{craftEssence.name}</h2>
                                            <div className="estrellasCraft">
                                                {[...Array(craftEssence.rank)].map((_, i) => (
                                                    <img key={i} src="../../../imgs/Cuenta/Estrellas/Estrella.png" />
                                                ))}
                                            </div>
                                        </div>
                                        <p>{craftEssence.effect}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="infoCraftEssence">
                                    <h3>Este servant no tiene un Craft Essence equipado.</h3>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}