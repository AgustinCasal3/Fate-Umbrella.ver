import './Reclutamiento.css';

export function Reclutamiento() {

    return (
        <>
            <section className="reclutamiento">
                <div className="contenedorReclutamiento">
                    <div className="contenedorImgReclutamiento">
                        <img src="../../../imgs/Empresa/SeparadorDiv2.png" alt="" />
                    </div>
                    <h3>En CunnyWorks siempre estamos en busca de nuevos talentos</h3>
                    <div className="contenedorButtonReclutamiento">
                        <a href='https://www.paypal.com/paypalme/ElParaguaCorp?country.x=AR&locale.x=es_XC' target='_blank'>
                            Cuentanos tu historia
                        </a>
                    </div>
                    <div className="contenedorImgReclutamiento">
                        <img src="../../../imgs/Empresa/SeparadorDiv2.png" alt="" className='invertidoVertical'/>
                    </div>
                </div>
            </section>
        </>
    )
}