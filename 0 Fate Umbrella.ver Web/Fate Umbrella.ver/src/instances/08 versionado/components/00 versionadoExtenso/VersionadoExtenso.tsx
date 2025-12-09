import './VersionadoExtenso.css';

import { ListaVersiones } from './00 listaVersiones/ListaVersiones';
import { Changelog } from './01 changelogVersion/Changelog';

export function VersionadoExtenso() {
    function volverArriba() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <section className="versionadoExtenso">

                <div className="tituloPrincipalVersionado">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <span>Todas las versiones</span>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>

                <div className="contenedorVersionadoExtenso">
                    
                    <ListaVersiones/>

                    <Changelog/>

                </div>

                <div className="contenedorVolverArriba">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <button onClick={volverArriba}>Volver Arriba</button>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>
            </section>
        </>
    )
}