import './Home.css'
import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Home() {
    document.title = "Home | Fate/Umbrella.ver"

    return (

        <>
            { Header() }
            <div className="contenedorHome">
                <section className="titulo">
                    <div className="tituloContenido">
                        <div className="tituloImg">
                            <img src="../../../imgs/Home/Titulo/Logo.png" alt="" />
                        </div>
                        <div className="tituloTexto">
                            <h2>"No es un deseo propio, es una leccion para el mundo que no aprecia la belleza del arte." - Emir</h2>
                        </div>
                        <div className="tituloButton">
                            <a href="#">Register Now</a>
                        </div>
                    </div>
                </section>

                <section className="personajes">
                    <div className="fichaPersonaje">
                        <div className="flecha">
                            <a href=""><img className='flechaIzquierda' src="../../../imgs/Home/Servants/Flecha.png" alt="" /></a>
                        </div>
                        <div className="personaje">
                            <div className="personajeInfo">
                                <div className="personajeNombre">
                                    <h1>Edmond Dantes</h1>
                                </div>
                                <div className="personajeTexto">
                                    <p>CV: Nobunaga Shimazaki</p>
                                    <p>Illustrator: Rui Komatsuzaki</p>
                                    <br />
                                    <p>The world's best-known seeker of vengeance.</p>
                                    <p>Known as "The Count of Monte Cristo."</p>
                                </div>
                            </div>
                            <div className="personajeImagen">
                                <img src="../../../imgs/Home/Servants/Edmond.png" alt="" />
                            </div>
                        </div>
                        <div className="flecha">
                            <a href=""><img src="../../../imgs/Home/Servants/Flecha.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="seleccionClase">
                        <a href="">Saber</a>
                        <a href="">Archer</a>
                        <a href="">Lancer</a>
                        <a href="">Femboy</a>
                    </div>
                </section>

                {/* Esto deberia ser un componente para que se actualice con la ultima version */}
                <section className="trailer">
                    <div className="trailerTitulo">
                        <h1>Fate/Umbrella.ver v0.02 "La Catástrofe Estelar"</h1>
                    </div>

                    <div className="trailerVideo">
                        <iframe className='botonPlay'
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Trailer ultima version">
                        </iframe>
                    </div>
                    <div className="trailerTexto">
                        <h2>- Se prepararán para la destruccion del mundo, asi como dios la hubiese deseado. -</h2>
                    </div>
                </section>

                {/* Cada uno de los comentarios tiene que ser un componente para que se actualice con la base de datos */}
                <section className="fateSeries">
                    <div className="contenedorSeries">
                        <div className="contenedorUmbrella">
                            <h2>Fate/Umbrella.ver</h2>
                            <div className="contenedorChapters">
                                {/* Fate Umbrella Cap 1 */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Umbrella/fondo_ch1.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Umbrella/logo_ch1.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                {/* Fate Umbrella Cap 2 */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Umbrella/fondo_ch2.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Umbrella/logo_ch2.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                {/* Fate Umbrella Cap 3 */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Umbrella/fondo_ch3.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Umbrella/logo_ch3.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="espaciadorSeries">
                            {/* Este tiene que ser una imagen */}
                        </div>
                        <div className="contenedorFate">
                            <h2>Historias Fate Recomendadas</h2>
                            <div className="contenedorFateSeries">
                                {/* Fate GO */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatego_fondo.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Fate/fatego_logo.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                {/* Fate Zero */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatezero_fondo.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Fate/fatezero_logo.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                {/* Fate Stay Night */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatesn_fondo.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Fate/fatesn_logo.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                {/* Fate Last Encore */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatele_fondo.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Fate/fatele_logo.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                {/* Fate CCC */}
                                <div className="itemSeries" 
                                    style={{
                                        backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fateccc_fondo.png")'
                                    }}>
                                    <div className="contenedorItemSeries">
                                        <img src="../../../imgs/Home/FateSeries/Fate/fateccc_logo.png" alt="" className="logoSerie" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section className="versiones">
                    <div className="contenedorVersionado">
                        <h2>Changelog</h2>
                        <div className="contenedorChangelog">
                            {/* Esto tiene que ser un componente que reaccione con la version elegida */}
                            <div className="textoCambios">
                                <h3>0.01 "El Comienzo" - 01/11/2025</h3>
                                <p>Bienvenidos a la primer versión oficial de <b>Fate/Umbrella.ver</b></p>

                                <h4>- Jugabilidad -</h4>
                                <p>Se estableció el entorno y los primeros diálogos de la Visual Novel, que contarán la historia de Umbrella.</p>
                                <p>Se añadieron elecciones básicas de diálogo que afectan levemente la respuesta del personaje principal.</p>

                                <h4>- Corrección de errores -</h4>
                                <p>Se corrigió un problema donde el diálogo se quedaba trabado al abrir el menú de pausa.</p>
                                <p>Arreglado un bug donde los retratos de los personajes no se actualizaban correctamente al cambiar de escena.</p>

                                <h4>- Interfaz -</h4>
                                <p>Ahora se mostrarán los retratos de los personajes, sus nombres, diálogos y botones funcionales para salir o ver el registro de conversación.</p>
                                <p>Se ajustó ligeramente el color del fondo para mejorar el contraste con los textos.</p>
                                <p>Se añadió un efecto de transición suave al pasar entre escenas.</p>

                                <h4>- Música y Sonido -</h4>
                                <p>Se implementó la pista principal del menú, junto con un bucle ambiental de fondo para las escenas de diálogo.</p>
                                <p>Se agregaron efectos de sonido para los clics de avance y las elecciones del jugador.</p>

                                <h4>- Arte y Escenarios -</h4>
                                <p>Umbrella ya cuenta con su primera ilustración oficial dentro del juego.</p>
                                <p>Se añadió un fondo temporal para el escenario inicial, que será reemplazado en futuras versiones.</p>

                                <h4>- Notas del Desarrollador -</h4>
                                <p>Esta versión marca el punto de partida del proyecto. A partir de aquí se expandirá el contenido narrativo y se comenzarán las pruebas con el sistema de elecciones múltiples.</p>
                                <p>Gracias a quienes prueben esta versión temprana. Si algo se rompe... probablemente estaba destinado a hacerlo (?).</p>

                            </div>
                            <div className="listaVersiones">

                                <label className="opcionVersionado">
                                    <input type="radio" name="version" checked />
                                    <div className="imgSelector"></div>
                                    <span>0.01 "El Comienzo" - 01/11/2025</span>
                                </label>

                                <label className="opcionVersionado">
                                    <input type="radio" name="version" checked />
                                    <div className="imgSelector"></div>
                                    <span>0.02 "La Catastrofe Estelar" - 16/11/2025</span>
                                </label>
                                
                                <label className="opcionVersionado">
                                    <input type="radio" name="version" checked />
                                    <div className="imgSelector"></div>
                                    <span>0.03 "La Caida del Imperio Tehuelche" - 30/11/2025</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            { Footer() }
        </>
    )
}