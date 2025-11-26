import './FateSeries.css'
import axios from 'axios';

import { ItemSeries } from './itemSeries/ItemSeries';

import { useEffect, useState } from 'react';

export interface FateSeries {
    id: string,
    fate: string,
    name: string,
    character: string,
    logo: string,
    link: string
}

export function FateSeries() {

    const [fateSeries, setFateSeries] = useState<FateSeries[]>([]);
    const [umbrellaSeries, setUmbrellaSeries] = useState<FateSeries[]>([]);
    
    async function getFateSeries() {
        const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
        const res = await axios.get(`${backendURL}/fateSeries/fate`);
        return res.data;
    }

    async function getUmbrellaSeries() {
        const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
        const res = await axios.get(`${backendURL}/fateSeries/umbrella`);
        return res.data;
    }

    useEffect(() => {
        async function recibirSeries() {
            try {
                const datosFate = await getFateSeries();
                setFateSeries(datosFate);

                const datosUmbrella = await getUmbrellaSeries();
                setUmbrellaSeries(datosUmbrella);

            } catch (err) {
                console.error(err);
            }
        }

        recibirSeries();
    }, []);

    return (
        <>
            <section className="fateSeries">
                <div className="contenedorSeries">
                    <div className="contenedorUmbrella">
                        <h2>Fate/Umbrella.ver</h2>
                        <div className="contenedorChapters">
                            {umbrellaSeries.map(u => (
                                <ItemSeries key={u.id} objeto={u}/>
                            ))}
                        </div>
                    </div>
                    <div className="espaciadorSeries">
                        {/* Este tiene que ser una imagen */}
                    </div>
                    <div className="contenedorFate">
                        <h2>Historias Fate Recomendadas</h2>
                        <div className="contenedorFateSeries">
                            {fateSeries.map(fate => (
                                <ItemSeries key={fate.id} objeto={fate}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}