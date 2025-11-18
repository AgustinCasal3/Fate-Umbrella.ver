import './ServantsCuenta.css'

import { ServantListaServants } from './01 servantListaServants/ServantListaServants'
import { ServantSeleccionado } from './02 servantSeleccionado/ServantSeleccionado'

export function ServantsCuenta(usuario) {
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