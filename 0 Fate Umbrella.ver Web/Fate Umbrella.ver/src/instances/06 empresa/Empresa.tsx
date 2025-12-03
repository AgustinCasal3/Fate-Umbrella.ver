import './Empresa.css'

import { Header } from '../0 header/Header';
import { Footer } from '../0 footer/Footer';

export function Empresa() {
    document.title = 'CunnyWorks | Fate/Umbrella.ver';

    function abrirDonacion() {
        window.open(
            "https://www.paypal.com/paypalme/ElParaguaCorp?country.x=AR&locale.x=es_XC",
            "_blank"
        );
    }

    return (
        <>
            <Header/>

            <section className="empresa">
                <div className="nombreEmpresa">
                    <img src="../../../imgs/Empresa/CunnyLogo.png" alt="Logo" />
                </div>

                <div className="integrantesEmpresa">
                    <h2>
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                            Nuestros fundadores 
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                    </h2>
                    <div className="ownersEmpresa">
                        <div className="contenedorOwnersEmpresa">
                            {/* Componente owner */}
                            <div className="owner">
                                <a href="https://www.youtube.com/@Aquwus" target='_blank'>
                                    <img src="../../../imgs/Empresa/Owners/Aquwus.png" alt="Foto de Aquwus" />
                                </a>
                                <span><a href="https://www.youtube.com/@Aquwus" target='_blank'>Aquwus</a></span>
                            </div>
                            <div className="owner">
                                <a href="https://github.com/izruru" target='_blank'>
                                    <img src="../../../imgs/Empresa/Owners/Izuru.png" alt="Foto de Izuru" />
                                </a>
                                <span><a href="https://github.com/izruru" target='_blank'>Izuru</a></span>
                            </div>
                        </div>
                    </div>

                    <h2>
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                            Nuestro equIpo
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                    </h2>
                    <div className="empleadosEmpresa">
                        {/* Componente empleado */}
                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/7704321" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Kokona.png" alt="Foto de Kokona" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/7704321">Kokona</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/10108243" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Kisaki.png" alt="Foto de Kisaki" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/10108243">Kisaki</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/9937494" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Arona.png" alt="Foto de Arona" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/9937494">Arona</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/9827519" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Ibuki.png" alt="Foto de Ibuki" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/9827519">Ibuki</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/10140821" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Hoshino.png" alt="Foto de Hoshino" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/10140821">Hoshino</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/10172147" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Shiroko.png" alt="Foto de Shiroko" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/10172147">Shiroko</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/9871095" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Arisu.png" alt="Foto de Arisu" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/9871095">Arisu</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/10116423" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Serika.png" alt="Foto de Serika" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/10116423">Serika</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/10102895" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Hikari.png" alt="Foto de Hikari" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/10102895">Hikari</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/9760705" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Midori.png" alt="Foto de Midori" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/9760705">Midori</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/9566104" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Momoi.png" alt="Foto de Momoi" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/9566104">Momoi</a></span>
                        </div>

                        <div className="empleado">
                            <a href="https://danbooru.donmai.us/posts/9628579" target='_blank'>
                                <img src="../../../imgs/Empresa/Workers/Seia.png" alt="Foto de Seia" />
                            </a>
                            <span><a href="https://danbooru.donmai.us/posts/9628579">Seia</a></span>
                        </div>                        
                    </div>
                </div>
            </section>

            <section className="quienesSomos">
                <div className="contenedorQuienesSomos">
                    <h2>¿Quienes Somos?</h2>
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
                <img src="../../../imgs/Empresa/SaberChibi.png" alt="" />
            </section>

            <section className="misionVision">
                <div className="contenedorMisionVision">
                    <div className="mision">
                        <h2>MISION</h2>
                        <div className="imgContainer">
                            <img src="../../../imgs/Empresa/SeparadorTexto2.png" alt="" />
                        </div>
                        <p>
                            En CunnyWorks tenemos el objetivo principal de brindar software de entretenimiento esencial, 
                            principalmente videojuegos, que inspiren a las personas a crear y encontrar aquello que les permita perseguir sus sueños. 
                            Mediante historias interactivas profundas, personalización,
                             mecánicas específicas, creemos que nuestros productos permitirán a nuestros usuarios alcanzar sus metas.
                        </p>
                    </div>
                    <div className="separadorMV"></div>
                    <div className="vision">
                        <h2>VISION</h2>
                        <div className="imgContainer">
                            <img src="../../../imgs/Empresa/SeparadorTexto2.png" alt="" />
                        </div>
                        <p>
                            En CunnyWorks buscamos llegar a usuarios en todo el planeta, expandir nuestro software a otras plataformas 
                            (comenzando por PC, continuando con mobile, consolas y VR) y convertirnos en una empresa de desarrollo
                            a nivel global, integrando talento multicultural para colaborar en un objetivo común.
                        </p>
                    </div>
                </div>
            </section>

            <section className="valores">
                <div className="contenedorValores">
                    <h2>Nuestros Valores</h2>

                    <div className="contenedorTarjetas">
                        <div className="tarjetaValor">
                            <h3>Honestidad y transparencia</h3>
                            <p>Comunicarnos de manera clara, sincera y directa con nuestros clientes y empleados.</p>
                        </div>
                        <div className="tarjetaValor">
                            <h3>Innovación</h3>
                            <p>Apostar a lo nuevo, a lo experimental y a lo disruptivo para diferenciarnos del resto de las empresas.</p>
                        </div>
                        <div className="tarjetaValor">
                            <h3>Calidad</h3>
                            <p>Asegurarnos de que cada producto cumpla con altos estándares técnicos y de diseño.</p>
                        </div>
                    </div>
                    <div className="contenedorTarjetas">
                        <div className="tarjetaValor">
                            <h3>Respeto por el cliente</h3>
                            <p>Escuchar sus necesidades y ponerlas en el centro de cada proyecto.</p>
                        </div>
                        <div className="tarjetaValor">
                            <h3>Trabajo en equipo</h3>
                            <p>Fomentar la colaboración interna como clave del éxito.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reclutamiento">
                <div className="contenedorReclutamiento">
                    <div className="contenedorImgReclutamiento">
                        <img src="../../../imgs/Empresa/SeparadorDiv2.png" alt="" />
                    </div>
                    <h3>En CunnyWorks siempre estamos en busca de nuevos taletos</h3>
                    <div className="contenedorButtonReclutamiento">
                        <button onClick={abrirDonacion}>Cuentanos tu historia</button>
                    </div>
                    <div className="contenedorImgReclutamiento">
                        <img src="../../../imgs/Empresa/SeparadorDiv2.png" alt="" className='invertidoVertical'/>
                    </div>
                </div>
            </section>

            <Footer/>    
        </>
    )
}