import './Descarga.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Descarga() {
    document.title = "Descarga | Fate/Umbrella.ver";

    return (
        <>
            <Header></Header>
            <section className="descarga">
                <div className="contenedorDescarga">
                    <div className="tituloDescarga">
                        <h1>Tu historia comienza aqui..</h1>
                    </div>
                    <div className="botonesDescarga">
                        {/* Tiene que ser un componente con el link nuevo */}
                        <div className="botonDescarga w10">
                            <img src="../../../imgs/Descarga/OS/w10.png" alt="Logo Windows 10" />
                            <span>Windows 10</span>
                        </div>
                        <div className="botonDescarga w11">
                            <img src="../../../imgs/Descarga/OS/w11.png" alt="Logo Windows 11" />
                            <span>Windows 11</span>
                        </div>
                        <div className="botonDescarga mac">
                            <img src="../../../imgs/Descarga/OS/mac.png" alt="Logo MacOS" />
                            <span>MacOS</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}