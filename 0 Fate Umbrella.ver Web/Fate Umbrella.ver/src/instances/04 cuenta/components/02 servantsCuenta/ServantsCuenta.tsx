import './ServantsCuenta.css'

import { ServantListaServants } from './01 servantListaServants/ServantListaServants'
import { ServantSeleccionado } from './02 servantSeleccionado/ServantSeleccionado'

interface Usuario {
    userId: string
}

interface userServant {
    userId: string,
    servantId: string,
    level: number,
    exp: number,
    ascension: number,
    skillsLevel: {
        skill1: Number,
        skill2: Number,
        skill3: Number
    },
    craftEssenceId: String
}

export function ServantsCuenta(usuario: Usuario) {
    // fetch para encontrar los user servants

    // fetch para encontrar cada servant con el user servants

    return (
        <>
            <section className="servantsCuenta">

                <div className="contenedorServantsCuenta">
                    <h2>Servants</h2>
                    <div className="listaServantsCuenta">
                        <div className="flechaListaServants flechaInvertidaHorizontal"></div>
                        <div className="tarjetasServants">
                            <ServantListaServants/>
                        </div>
                        <div className="flechaListaServants"></div>
                    </div>
                </div>

                <ServantSeleccionado/>

            </section>
        </>
    )
}