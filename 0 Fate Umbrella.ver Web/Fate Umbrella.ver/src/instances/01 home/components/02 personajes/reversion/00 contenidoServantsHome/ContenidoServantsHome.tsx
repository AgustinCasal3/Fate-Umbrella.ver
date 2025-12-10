import './ContenidoServantsHome.css';

import axios from 'axios';

import { SelectorServant } from './00 selectorServant/SelectorServant';
import { CarruselInfoServant } from './01 carruselInfoServant/CarruselInfoServant';
import { useEffect, useState } from 'react';

interface Clase {
    clase: string
}

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

export function ContenidoServantsHome({ clase }: Clase) {

    const [homeServants, setHomeServants] = useState<ServantInfo[]>([]);
    const [selectedServant, setSelectedServant] = useState<ServantInfo | null>(null);
    const [loading, setLoading] = useState(true);

    // LLAMAR A LA BASE DE DATOS
    async function fetchHomeServants(clase: string) {
        const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
        const res = await axios.get(`${backendURL}/homeServants/${clase}`);
        return res.data;
    }


    useEffect(() => {
        setLoading(true);

        async function conseguirServants() {
            try {
                const servants = await fetchHomeServants(clase); 
                setHomeServants(servants);
                setSelectedServant(servants[0] || null);
                console.log('Servants conseguidos:', servants);

                setLoading(false);
            } catch (err) {
                console.error('Error: ', err)
                setLoading(false);
            }
        }

        conseguirServants();
    }, [clase])

    if (loading) {
        return <div className="cargandoServants">Cargando Servants...</div>
    }

    return (
        <>
            <div className="contenidoServantsHome"
                style={{backgroundImage: `url(../../../../../../imgs/Home/Servants/Fondo/${clase}BG.png)`}}
            >
                <SelectorServant servants={homeServants} onServantChange={setSelectedServant}/>

                {selectedServant && <CarruselInfoServant servant={selectedServant}/>}
            </div>
        </>
    )
}