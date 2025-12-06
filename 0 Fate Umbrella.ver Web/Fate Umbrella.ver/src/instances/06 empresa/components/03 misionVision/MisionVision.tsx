import './MisionVision.css';

export function MisionVision() {
    return (
        <>
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
        </>
    )
}