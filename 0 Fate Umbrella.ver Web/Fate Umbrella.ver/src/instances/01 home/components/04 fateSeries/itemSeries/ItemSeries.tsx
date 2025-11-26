import './ItemSeries.css'

import { FateSeries } from '../FateSeries'

interface Objeto {
    objeto: FateSeries
}

export function ItemSeries({objeto}: Objeto) {
    return (
        <>
            <a href={objeto.link} target='_blank'>
                <div className="itemSeries" 
                    style={{
                        backgroundImage: `url("../../../imgs/Home/FateSeries/${objeto.fate}/${objeto.character}.png")`
                    }}>
                    <div className="contenedorItemSeries">
                        <img src={`../../../imgs/Home/FateSeries/${objeto.fate}/${objeto.logo}.png`} alt={`Logo ${objeto.name}`} className="logoSerie" />
                    </div>
                </div>
            </a>
        </>
    )
}