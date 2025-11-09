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
                        <div className="flechaListaServants flechaInvertidaHorizontal"></div>
                        <div className="tarjetasServants">
                            {/* Componente Tarjeta Servant */}
                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/Avenger.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/EdmondDantes1.png" alt="" className="imagenServant"/>
                            </div>

                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/Avenger.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/AngraMainyu1.png" alt="" className="imagenServant"/>
                            </div>

                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/Saber.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/SirGawain1.png" alt="" className="imagenServant"/>
                            </div>

                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/Rider.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/Iskandar1.png" alt="" className="imagenServant"/>
                            </div>

                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/AlterEgo.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/OkitaSoujiAlter2.png" alt="" className="imagenServant"/>
                            </div>

                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/Assasin.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/RyougiShiki1.png" alt="" className="imagenServant"/>
                            </div>

                            <div className="tarjetaServant">
                                <img src="../../../imgs/Cuenta/Clases/Rider.png" alt="" className="claseServant"/>
                                <img src="../../../imgs/Cuenta/Pfp/Astolfo4.png" alt="" className="imagenServant"/>
                            </div>
                        </div>
                        <div className="flechaListaServants"></div>
                    </div>
                </div>

                <div className="contenedorContenidoServantSeleccionado">
                    <div className="contenidoServantSeleccionado">
                        <div className="tituloServantSeleccionado">
                            <div className="izqTituloServant">
                                <img src="../../../imgs/Cuenta/Clases/Avenger.png" alt="Clase del Servant" />
                                <h1>Avenger - Edmond Dantes</h1>
                            </div>
                            <div className="derTituloServant">
                                <div className="estrellasServant">
                                    <img src="../../../imgs/Cuenta/Estrellas/Estrella.png" alt="" />
                                    <img src="../../../imgs/Cuenta/Estrellas/Estrella.png" alt="" />
                                    <img src="../../../imgs/Cuenta/Estrellas/Estrella.png" alt="" />
                                    <img src="../../../imgs/Cuenta/Estrellas/Estrella.png" alt="" />
                                    <img src="../../../imgs/Cuenta/Estrellas/Estrella.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="infoServantSeleccionado">
                            <div className="portadaImagenServant">
                                <img src="../../../imgs/Cuenta/Portadas/AvengerEdmondDantes2.png" alt="" />
                            </div>

                            <div className="statsServantSeleccionado">
                                <div className="ataqueServant">
                                    <h2>--------- Ataque ---------</h2>
                                    <div className="ataqueServantValores">
                                        <div className="ataqueBase">
                                            <h3>Base</h3>
                                            <p>1900</p>
                                        </div>
                                        <div className="ataqueActual">
                                            <h3>Actual</h3>
                                            <p>2249</p>
                                        </div>
                                        <div className="ataqueMaximo">
                                            <h3>Maximo</h3>
                                            <p>12700</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="vidaServant">
                                    <h2>----------- Vida -----------</h2>
                                    <div className="vidaServantValores">
                                        <div className="vidaBase">
                                            <h3>Base</h3>
                                            <p>1700</p>
                                        </div>
                                        <div className="vidaActual">
                                            <h3>Actual</h3>
                                            <p>1963</p>
                                        </div>
                                        <div className="vidaMaximo">
                                            <h3>Maximo</h3>
                                            <p>12000</p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className='nombreCraftEssence'>Craft Essence</h2>
                                <div className="infoCraftEssence">
                                    <div className="imgCraftEssence">
                                        <img src="../../../imgs/Cuenta/CraftEssence/EncounterAtGojouBridge.png" alt="Craft Essence Equipada" />
                                    </div>
                                    <div className="textoCraftEssence">
                                        <h2>Encounter At Gojou Bridge</h2>

                                        <p>
                                            - Fuerza Base: +12
                                        </p>
                                        <p>
                                            - Vida Base: +5
                                        </p>
                                        <p>
                                            - Buff: Aumenta daño booster en 30%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="amigosCuenta">
                <div className="contenedorAmigosCuenta">
                    <h2>
                        Amigos:
                    </h2>
                    <div className="listaAmigosCuenta">
                        <div className="contenedorListaAmigosCuenta">
                            
                            <div className="tarjetaAmigoCuenta">
                                <div className="contenidoTarjetaAmigoCuenta">
                                    <div className="imgAmigoCuenta">
                                        <img src="../../../imgs/Cuenta/Pfp/Astolfo4.png" alt="" />
                                    </div>
                                    <div className="infoAmigoCuenta">
                                        <span>Aquwus</span>
                                        <div className="nivelAmigoCuenta">
                                            <div className="barraNivelAmigoCuenta" style={{
                                                background: 'linear-gradient(90deg, #b5c6ff 0%, #8ea2ff 23%, #6a83e8 46%, #FFF 46%)'
                                            }}></div>
                                            <div className="numeroNivelAmigoCuenta">
                                                <span>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tarjetaAmigoCuenta">
                                <div className="contenidoTarjetaAmigoCuenta">
                                    <div className="imgAmigoCuenta">
                                        <img src="../../../imgs/Cuenta/Pfp/MedeaLily2.png" alt="" />
                                    </div>
                                    <div className="infoAmigoCuenta">
                                        <span>ivan.fablab</span>
                                        <div className="nivelAmigoCuenta">
                                            <div className="barraNivelAmigoCuenta" style={{
                                                background: 'linear-gradient(90deg, #b5c6ff 0%, #8ea2ff 45%, #6a83e8 90%, #FFF 90%)'
                                            }}></div>
                                            <div className="numeroNivelAmigoCuenta">
                                                <span>478</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tarjetaAmigoCuenta">
                                <div className="contenidoTarjetaAmigoCuenta">
                                    <div className="imgAmigoCuenta">
                                        <img src="../../../imgs/Cuenta/Pfp/Caligula3.png" alt="" />
                                    </div>
                                    <div className="infoAmigoCuenta">
                                        <span>torsido27</span>
                                        <div className="nivelAmigoCuenta">
                                            <div className="barraNivelAmigoCuenta" style={{
                                                background: 'linear-gradient(90deg, #b5c6ff 0%, #8ea2ff 11.5%, #6a83e8 23%, #FFF 23%)'
                                            }}></div>
                                            <div className="numeroNivelAmigoCuenta">
                                                <span>69</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tarjetaAmigoCuenta">
                                <div className="contenidoTarjetaAmigoCuenta">
                                    <div className="imgAmigoCuenta">
                                        <img src="../../../imgs/Cuenta/Pfp/JamesMoriarty2.png" alt="" />
                                    </div>
                                    <div className="infoAmigoCuenta">
                                        <span>emir220</span>
                                        <div className="nivelAmigoCuenta">
                                            <div className="barraNivelAmigoCuenta" style={{
                                                background: 'linear-gradient(90deg, #b5c6ff 0%, #8ea2ff 26.5%, #6a83e8 57%, #FFF 57%)'
                                            }}></div>
                                            <div className="numeroNivelAmigoCuenta">
                                                <span>220</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tarjetaAmigoCuenta">
                                <div className="contenidoTarjetaAmigoCuenta">
                                    <div className="imgAmigoCuenta">
                                        <img src="../../../imgs/Cuenta/Pfp/IllyasvielVonEinzbern2.png" alt="" />
                                    </div>
                                    <div className="infoAmigoCuenta">
                                        <span>tobbiebie(gay)</span>
                                        <div className="nivelAmigoCuenta">
                                            <div className="barraNivelAmigoCuenta" style={{
                                                background: 'linear-gradient(90deg, #b5c6ff 0%, #8ea2ff 36.5%, #6a83e8 77%, #FFF 77%)'
                                            }}></div>
                                            <div className="numeroNivelAmigoCuenta">
                                                <span>7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}