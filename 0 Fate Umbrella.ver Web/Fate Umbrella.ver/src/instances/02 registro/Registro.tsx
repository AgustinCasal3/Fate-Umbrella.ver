import './Registro.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Registro() {
    document.title = 'Registro | Fate/Umbrella.ver';

    return (
        <>
            <Header></Header>
            
            <section className="registro">
                <div className="contenedorRegistro">
                    <div className="tituloRegistro">
                        <h1>Bienvenido Aspirante</h1>
                    </div>
                    <div className="formularioRegistro">
                        <form>
                            <label>Email</label>
                            <input type="text" />

                            <label>Password</label>
                            <input type='password'/>

                            <label>Repeat Password</label>
                            <input type='password'/>

                            <button>Aplicar</button>
                        </form>
                    </div>
                </div>
                <div className="imagenRegistro"></div>
            </section>

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
                    <img src="../../../imgs/Registro/Info/Edmond.png" alt="Edmond Dantes Chibi" />
                </div>
                <div className="info">
                    <img src="../../../imgs/Registro/Info/Nemo.png" alt="Nemo Chibi" style={{transform: 'scaleX(-1)'}}/>
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
                    <img src="../../../imgs/Registro/Info/Mash.png" alt="" />
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}