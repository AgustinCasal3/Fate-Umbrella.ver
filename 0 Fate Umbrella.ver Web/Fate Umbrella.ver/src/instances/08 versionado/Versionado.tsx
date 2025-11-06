import './Versionado.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Versionado() {

    document.title = 'Versionado | Fate/Umbrella.ver'

    function volverArriba() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <Header />

            <section className="versionadoExtenso">

                <div className="tituloPrincipalVersionado">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <span>Todas las versiones</span>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>

                <div className="contenedorVersionadoExtenso">
                    <div className="listaVersionesExtenso">
                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.01 "El Comienzo" - 01/11/2025</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.02 "La Catastrofe Estelar" - 16/11/2025</span>
                        </label>
                        
                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.03 "La Caida del Imperio Tehuelche" - 30/11/2025</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.04 "Sombras sobre Umbra" - 14/12/2025</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.05 "El Despertar de la Dama Blanca" - 28/12/2025</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.06 "Recuerdos del Horizonte" - 11/01/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.07 "El Eco del Silencio" - 25/01/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.08 "Fragmentos del Abismo" - 08/02/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.09 "El Último Lucero" - 22/02/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.10 "Amanecer Carmesí" - 08/03/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.11 "El Trono de la Bestia" - 22/03/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.12 "El Reino Sumergido" - 05/04/2026</span>
                        </label>

                        <label className="opcionVersionadoExtenso">
                            <input type="radio" name="version" />
                            <div className="imgSelectorExtenso"></div>
                            <span>0.13 "Cenizas del Destino" - 19/04/2026</span>
                        </label>
                    </div>

                    <div className="changelogVersionExtenso">
                        <div className="tituloVersionado">
                            <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                            <span>0.01 "El Comienzo" - 01/11/2025</span>
                            <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                        </div>
                        <h3 className='textoVCentrado' >usen funcion flecha chicos es divertida se los prometo <b>- Emir</b></h3>
                        <p className='textoVCentrado' >Bienvenidos a la primer versión oficial de <b>Fate/Umbrella.ver</b></p>

                        <h2>Registro de cambios</h2>
                        <p className='sangria'>He aqui los cambios de la version 0.01 "El Comienzo". Esto declara el principio de la aventura de Umbrella, perdido en la Region Nula y haciendo todo en su poder para completar su mision.</p>

                        <h3>- Jugabilidad -</h3>
                        <ul>
                            <li><p>Se estableció el entorno y los primeros diálogos de la Visual Novel, que contarán la historia de Umbrella.</p></li>
                            <li><p>Se añadieron elecciones básicas de diálogo que afectan levemente la respuesta del personaje principal.</p></li>
                        </ul>

                        <h3>- Corrección de errores -</h3>
                        <ul>
                            <li><p>Se corrigió un problema donde el diálogo se quedaba trabado al abrir el menú de pausa.</p></li>
                            <li><p>Arreglado un bug donde los retratos de los personajes no se actualizaban correctamente al cambiar de escena.</p></li>
                        </ul>

                        <h3>- Interfaz -</h3>
                        <ul>
                            <li><p>Ahora se mostrarán los retratos de los personajes, sus nombres, diálogos y botones funcionales para salir o ver el registro de conversación.</p></li>
                            <li><p>Se ajustó ligeramente el color del fondo para mejorar el contraste con los textos.</p></li>
                            <li><p>Se añadió un efecto de transición suave al pasar entre escenas.</p></li>
                        </ul>

                        <div className="imagenChangelog">
                            <h3>Interfaz Visual Novel</h3>
                            <div className="imgChangelog">
                                <img src="../../../imgs/Versionado/0.01/InterfazVN.png" alt="" />
                            </div>
                        </div>

                        <h3>- Música y Sonido -</h3>
                        <ul>
                            <li><p>Se implementó la pista principal del menú, junto con un bucle ambiental de fondo para las escenas de diálogo.</p></li>
                            <li><p>Se agregaron efectos de sonido para los clics de avance y las elecciones del jugador.</p></li>
                        </ul>

                        <h3>- Arte y Escenarios -</h3>
                        <ul>
                            <li><p>Umbrella ya cuenta con su primera ilustración oficial dentro del juego.</p></li>
                            <li><p>Se añadió un fondo temporal para el escenario inicial, que será reemplazado en futuras versiones.</p></li>
                        </ul>

                        <div className="contenedorNotasDev">
                            <div className="tituloVersionado">
                                <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                                <span>Notas del Desarrollador</span>
                                <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                            </div>
                            <div className="contenidoNotasDev">
                                <div className="izqNotasDev">
                                    <p className='sangria' >Esta versión marca el punto de partida del proyecto. A partir de aquí se expandirá el contenido narrativo y se comenzarán las pruebas con el sistema de elecciones múltiples.</p>
                                    <p className='sangria' >Gracias a quienes prueben esta versión temprana. Si algo se rompe... probablemente estaba destinado a hacerlo (?).</p>
                                </div>
                                <div className="derNotasDev">
                                    <a href="https://danbooru.donmai.us/posts/9742350?q=zhou135627" target='_blank'>
                                        <img src="../../../imgs/Versionado/0.01/ImagenConcebida.png" alt="" />
                                    </a>
                                    <p>Imagen concebida por: <b>Izu</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedorVolverArriba">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <button onClick={volverArriba}>Volver Arriba</button>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>
            </section>

            <Footer />
        </>
    )
}