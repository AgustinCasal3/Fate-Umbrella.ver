import './Personajes.css'

export function Personajes() {
    return (
        <>
            <section className="personajes">
                <div className="fichaPersonaje">
                    <div className="flecha">
                        <a href="#"><img className='flechaIzquierda' src="../../../imgs/Home/Servants/Flecha.png" alt="" /></a>
                    </div>
                    <div className="personaje">
                        <div className="personajeInfo">
                            <div className="personajeNombre">
                                <h1>Edmond Dantes</h1>
                            </div>
                            <div className="personajeTexto">
                                <p>CV: Nobunaga Shimazaki</p>
                                <p>Illustrator: Rui Komatsuzaki</p>
                                <br />
                                <p>The world's best-known seeker of vengeance.</p>
                                <p>Known as "The Count of Monte Cristo."</p>
                            </div>
                        </div>
                        <div className="personajeImagen">
                            <img src="../../../imgs/Home/Servants/Edmond.png" alt="" />
                        </div>
                    </div>
                    <div className="flecha">
                        <a href="#"><img src="../../../imgs/Home/Servants/Flecha.png" alt="" /></a>
                    </div>
                </div>
                <div className="seleccionClase">
                    <a href="#">Saber</a>
                    <a href="#">Archer</a>
                    <a href="#">Lancer</a>
                    <a href="#">Caster</a>
                </div>
            </section>
        </>
    )
}