import './InfoCuenta.css'

export function InfoCuenta() {
    return (
        <>
            <section className="cuenta">
                <div className="contenedorCuenta">
                    <img src="../../../imgs/Cuenta/Pfp/OkitaSoujiAlter2.png" alt="Foto de Okita Souji Alter *NOMBRE PERSOANJE*" />
                    <div className="infoCuenta">
                        <h1>
                            izuru.skibidi
                        </h1>
                        <div className="progresoNivel">
                            <div className="barraNivel"></div>
                            <div className="numeroNivel">
                                <span>167</span>
                            </div>
                        </div>
                        <div className="bioCuenta">
                            <p>"Juego solo, no por costumbre, sino porque el silencio me deja pensar. No busco destacar, pero siempre estoy ahí, constante… incluso cuando nadie nota mi presencia."</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}