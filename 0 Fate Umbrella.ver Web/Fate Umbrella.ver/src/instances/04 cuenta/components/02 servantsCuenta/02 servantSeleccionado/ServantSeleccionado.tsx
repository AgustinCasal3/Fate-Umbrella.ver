import './ServantSeleccionado.css'

// interface servant Usuario

export function ServantSeleccionado() {
    return (
        <>
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
                            <img src="../../../imgs/Cuenta/Portadas/001_Avenger_Edmond_Dantes_2.png" alt="" />
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
                                    <img src="../../../imgs/Cuenta/CraftEssence/001_EncounterAtGojouBridge.png" alt="Craft Essence Equipada" />
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
        </>
    )
}