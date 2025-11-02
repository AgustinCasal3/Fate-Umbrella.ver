import './Footer.css'

export function Footer() {
    return (
        <>
            <footer>
                <div className="contenedorFooter">
                    <div className="devs">
                        <div className="dev">
                            <a href="https://github.com/izruru" target='_blank'>
                                <div className="devImg">
                                    <img src="../../../imgs/footer/Lucas.jpg" alt="" />
                                </div>
                            </a>
                            <div className="devText">
                                <p>elparagua</p>
                            </div>
                        </div>
                        <div className="dev">
                            <a href="https://www.youtube.com/@Aquwus" target='_blank'>
                                <div className="devImg">
                                    <img src="../../../imgs/footer/Agustin.jpg" alt="" />
                                </div>
                            </a>
                            <div className="devText">
                                <p>aquwu</p>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="copyImg">
                            <img src="../../../imgs/footer/LogoJuego.png" alt="" />
                        </div>
                        <div className="copyText">
                            <p>todo contenido es derecho de Typer Moun</p>
                            <p>Copiryght de animplesxx</p>
                        </div>
                    </div>
                    <div className="legal">
                        <div className="legalText">
                            <a href="/empresa">sobre nosotros :3</a>
                            <a href="">termino y cindisione</a>
                            <a href="">aviso legal</a>
                            <p>no somo produtore no nos denunsie</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}