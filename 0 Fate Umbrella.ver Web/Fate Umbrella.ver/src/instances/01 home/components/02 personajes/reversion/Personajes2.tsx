import './Personajes2.css';

import { ContenidoServantsHome } from './00 contenidoServantsHome/ContenidoServantsHome';
import { useState } from 'react';

export function ServantsHome() {
    const [claseSeleccionada, setClaseSeleccionada] = useState('Saber');
    
    const BotonesClasesServats = [
        'Saber', 
        'Archer', 
        'Lancer', 
        'Rider', 
        'Caster', 
        'Assassin', 
        'Berserker', 
        'Ruler',
        'Alter Ego',
        'Foreigner',
        'MoonCancer',
        'Pretender',
        'Shielder'
    ]

    return (
        <>
            <div className="servantsHome">
                <div className="contenedorClasesBotones">
                    {BotonesClasesServats.map(c => (
                        <div className="botonClase" key={c}>
                        <button onClick={() => setClaseSeleccionada(c)}>
                            <img src={`../../../../../imgs/Cuenta/Clases/${c}.png`} alt={`Clase ${c}`} />
                            <span>{c}</span>
                        </button>
                    </div>
                    ))}
                </div>

                <ContenidoServantsHome clase={claseSeleccionada}/>
            </div>
        </>
    )
}