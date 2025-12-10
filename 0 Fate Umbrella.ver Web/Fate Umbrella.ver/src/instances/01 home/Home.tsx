import './Home.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

import { Titulo } from './components/01 titulo/Titulo'
import { Personajes } from './components/02 personajes/Personajes'
import { ServantsHome } from './components/02 personajes/reversion/Personajes2'
import { Trailer } from './components/03 trailer/Trailer'
import { FateSeries } from './components/04 fateSeries/FateSeries'
import { Versiones } from './components/05 versiones/Versiones'

export function Home() {
    document.title = "Home | Fate/Umbrella.ver"

    return (

        <>
            <Header/>
            <div className="contenedorHome">
                <Titulo/>

                {/* Este era el anterior Personajes, cambiado por ServantsHome */}
                {/* <Personajes/> */}

                <ServantsHome/>

                <Trailer/>

                <FateSeries/>

                <Versiones/>
            </div>
            <Footer/>
        </>
    )
}