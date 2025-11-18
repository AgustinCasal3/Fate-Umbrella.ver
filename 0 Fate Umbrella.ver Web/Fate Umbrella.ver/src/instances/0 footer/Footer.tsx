import './Footer.css'

export function Footer() {
    return (
        <>
            <footer>
                <div className="contenedorFooter">
                    <div className="devs">
                        <div className="contenedorDevs">
                            <div className="dev">
                                <a href="https://github.com/izruru" target='_blank' className="devImg">
                                    <img src="../../../imgs/footer/Lucas.jpg" alt="" />
                                </a>
                                <a href="" className='devText'>
                                    <p>Izuru</p>
                                </a>
                            </div>
                            <div className="dev">
                                <a href="https://www.youtube.com/@Aquwus" target='_blank' className="devImg">
                                    <img src="../../../imgs/footer/Agustin.jpg" alt="" />
                                </a>
                                <a href="" className='devText'>
                                    <p>Aquwus</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="contenedorCopyright">
                            <div className="copyImg">
                                <img src="../../../imgs/footer/LogoJuego.png" alt="" />
                            </div>
                            <div className="copyText">
                                <p>Todo contenido oficial es derecho de Type/Moon</p>
                                <p>Copyright de Animeplex</p>
                            </div>
                        </div>
                    </div>
                    <div className="legal">
                        <div className="legalText">
                            <a href="/empresa">Sobre Nosotros</a>
                            <a href="#">Terminos y Condiciones</a>
                            <a href="#">Aviso Legal</a>
                            <p>Esto es un Fangame. Respeto.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}