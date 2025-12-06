import './Valores.css';

export function Valores() {
    return (
        <>
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
        </>
    )
}