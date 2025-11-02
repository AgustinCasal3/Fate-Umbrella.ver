import './Empresa.css'

import { Header } from '../0 header/Header';
import { Footer } from '../0 footer/Footer';

export function Empresa() {
    document.title = 'CunnyWorks | Fate/Umbrella.ver';

    return (
        <>
            <Header/>
            <section className="empresa">
                <div className="nombreEmpresa">
                    <img src="" alt="Logo" />
                    <h1>Cunny Works</h1>
                </div>
                <div className="integrantesEmpresa">
                    <div className="ownersEmpresa">
                        {/* Componente owner */}
                        <div className="owner">
                            <img src="../../../imgs/Empresa/Owners/Aquwus.png" alt="Foto de Aquwus" />
                            <span>Aquwus</span>
                        </div>
                        <div className="owner">
                            <img src="../../../imgs/Empresa/Owners/Izuru.png" alt="Foto de Izuru" />
                            <span>Izuru</span>
                        </div>
                    </div>
                    <div className="empleadosEmpresa">
                        {/* Componente empleado */}
                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Kokona.png" alt="Foto de Kokona" />
                            <span>Kokona</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Kisaki.png" alt="Foto de Kisaki" />
                            <span>Kisaki</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Arona.png" alt="Foto de Arona" />
                            <span>Arona</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Ibuki.png" alt="Foto de Ibuki" />
                            <span>Ibuki</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Hoshino.png" alt="Foto de Hoshino" />
                            <span>Hoshino</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Shiroko.png" alt="Foto de Shiroko" />
                            <span>Shiroko</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Arisu.png" alt="Foto de Arisu" />
                            <span>Arisu</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Serika.png" alt="Foto de Serika" />
                            <span>Serika</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Hikari.png" alt="Foto de Hikari" />
                            <span>Hikari</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Midori.png" alt="Foto de Midori" />
                            <span>Midori</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Momoi.png" alt="Foto de Momoi" />
                            <span>Momoi</span>
                        </div>

                        <div className="empleado">
                            <img src="../../../imgs/Empresa/Workers/Seia.png" alt="Foto de Seia" />
                            <span>Seia</span>
                        </div>                        
                    </div>
                </div>
            </section>
            <section className="quienesSomos">
                <div className="contenedorQuienesSomos">
                    <h2>Quienes Somos</h2>
                    <p>
                        En Cunny Corp creemos que los videojuegos son mucho más que entretenimiento 
                        son una forma de conectar, de soñar y de crear experiencias únicas. 
                        Nuestro equipo se dedica a dar vida a historias interactivas que inspiran a los jugadores a explorar nuevos mundos.
                    </p>
                    <p>
                        Nuestra misión es llegar a personas de todo el mundo, llevando nuestras ideas a diferentes 
                        plataformas como PC, móviles, consolas y realidad virtual. Trabajamos con pasión, creatividad 
                        e innovación para que cada proyecto no solo cumpla con altos estándares de calidad, 
                        sino que también deje una huella en cada jugador.
                    </p>
                </div>
            </section>
            <section className="misionVision">
                <div className="contenedorMisionVision">
                    <div className="mision">
                        <h2>Mision</h2>
                        <p>
                            En XXXX tenemos el objetivo principal de brindar software de entretenimiento esencial, 
                            principalmente videojuegos, que inspiren a las personas a crear y encontrar aquello que les permita perseguir sus sueños. 
                            Mediante historias interactivas profundas, personalización,
                             mecánicas específicas, creemos que nuestros productos permitirán a nuestros usuarios alcanzar sus metas.
                        </p>
                    </div>
                    <div className="separadorMV"></div>
                    <div className="vision">
                        <h2>Vision</h2>
                        <p>
                            En XXXX buscamos llegar a usuarios en todo el planeta, expandir nuestro software a otras plataformas 
                            (comenzando por PC, continuando con mobile, consolas y VR) y convertirnos en una empresa de desarrollo
                             a nivel global, integrando talento multicultural para colaborar en un objetivo común.
                        </p>
                    </div>
                </div>
            </section>
            <section className="valores">
                <div className="contenedorValores">
                    <h2>Nuestros Valores</h2>
                    <p>Honestidad y transparencia: Comunicarnos de manera clara, sincera y directa con nuestros clientes y empleados.</p>
                    <p>Innovación: Apostar a lo nuevo, a lo experimental y a lo disruptivo para diferenciarnos del resto de las empresas.</p>
                    <p>Calidad: Asegurarnos de que cada producto cumpla con altos estándares técnicos y de diseño.</p>
                    <p>Respeto por el cliente: Escuchar sus necesidades y ponerlas en el centro de cada proyecto.</p>
                    <p>Trabajo en equipo: Fomentar la colaboración interna como clave del éxito.</p>
                </div>
            </section>
            <section className="reclutamiento">
                <div className="contenedorReclutamiento">
                    <h3>En CunnyWorks siempre estamos en busca de nuevos taletos</h3>
                    <button>Cuentanos tu historia</button>
                </div>
            </section>
            <Footer/>    
        </>
    )
}