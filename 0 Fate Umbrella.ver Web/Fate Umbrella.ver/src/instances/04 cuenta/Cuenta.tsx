import './Cuenta.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Cuenta() {
    document.title = 'NOMBRE USUARIO | Fate/Umbrella.ver'

    return (
        <>
            <Header/>

            <section className="cuenta">
                <div className="contenedorCuenta">
                    <img src="../../../imgs/Cuenta/Pfp/OkitaSoujiAlter2.png" alt="Foto de Okita Souji Alter *NOMBRE PERSOANJE*" />
                    <div className="infoCuenta">
                        <h1>
                            izuru.skibidi
                        </h1>
                        <div className="progresoNivel">
                            <div className="barraNivel"></div>
                            <div className="numeroNivel">
                                <span>167</span>
                            </div>
                        </div>
                        <div className="bioCuenta">
                            <p>"Juego solo, no por costumbre, sino porque el silencio me deja pensar. No busco destacar, pero siempre estoy ahí, constante… incluso cuando nadie nota mi presencia."</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="servantsCuenta">
                <div className="contenedorServantsCuenta">
                    <h2>Servants</h2>
                    <div className="listaServantsCuenta">
                        <div className="flechaListaServants"></div>
                        <div className="tarjetasServants">
                            {/* Componente Tarjeta Servant */}
                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Pfp/EdmondDantes1.png" alt="" className="claseServant" />
                            </div>
                        </div>
                        <div className="flechaListaServants"></div>
                    </div>
                </div>

                <div className="infoServantSeleccionado"></div>
            </section>

            <section className="amigosCuenta">

            </section>

            <Footer/>
        </>
    )
}