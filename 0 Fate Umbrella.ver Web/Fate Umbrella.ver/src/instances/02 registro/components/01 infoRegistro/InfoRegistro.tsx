import './InfoRegistro.css'

export function InfoRegistro() {
    return (
        <>
            <section className="infoRegistro">
                <div className="info">
                    <div className="textoInfo">
                        <h2>Registro de Progreso</h2>
                        <p>
                            Guarda automáticamente cada decisión y avance dentro de la historia. 
                            Podrás continuar desde el mismo punto en cualquier momento sin perder tus elecciones o datos previos.
                        </p>
                        <p>
                            El registro también muestra un historial de capítulos completados y estadísticas básicas de tu recorrido.
                        </p>
                    </div>
                    <div className="imgEdmond"></div>
                </div>
                <div className="info reverse">
                    <div className="imgNemo" style={{transform: 'scaleX(-1)'}}></div>
                    <div className="textoInfo">
                        <h2>Registro de Personajes</h2>
                        <p>
                            Consulta información detallada de los personajes que aparecen en la historia, 
                            incluyendo sus relaciones, apariciones y desarrollo a lo largo del juego.
                        </p>
                        <p>
                            Cada personaje se desbloquea automáticamente a medida que avances, permitiéndote revisarlos cuando quieras.
                        </p>
                    </div>
                </div>
                <div className="info">
                    <div className="textoInfo">
                        <h2>Acceso Remoto</h2>
                        <p>
                            Inicia sesión desde cualquier dispositivo y sincroniza tu progreso en la nube. 
                            Así podrás continuar tu partida sin importar desde dónde juegues.
                        </p>
                        <p>
                            Además, el acceso remoto permite revisar tus registros y configuraciones personales en tiempo real.
                        </p>
                    </div>
                    <div className="imgMash"></div>
                </div>
            </section>
        </>
    )
}