import './Versiones.css'

export function Versiones() {
    return (
        <>
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
                                <input type="radio" name="version" />
                                <div className="imgSelector"></div>
                                <span>0.01 "El Comienzo" - 01/11/2025</span>
                            </label>

                            <label className="opcionVersionado">
                                <input type="radio" name="version" />
                                <div className="imgSelector"></div>
                                <span>0.02 "La Catastrofe Estelar" - 16/11/2025</span>
                            </label>
                            
                            <label className="opcionVersionado">
                                <input type="radio" name="version" />
                                <div className="imgSelector"></div>
                                <span>0.03 "La Caida del Imperio Tehuelche" - 30/11/2025</span>
                            </label>

                            <a href="/versionado" className="opcionVersionado">
                                <span>Todas las Versiones</span>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}