import './Trailer.css'

export function Trailer() {
    return (
        <>
            {/* Esto deberia ser un componente para que se actualice con la ultima version */}
            <section className="trailer">
                <div className="trailerTitulo">
                    <h1>Fate/Umbrella.ver v0.02 "La Catástrofe Estelar"</h1>
                </div>

                <div className="trailerVideo">
                    <iframe className='botonPlay'
                        src="https://www.youtube.com/embed/11vAh33_2eI"
                        title="Trailer ultima version">
                    </iframe>
                </div>
                <div className="trailerTexto">
                    <h2>- Se prepararán para la destruccion del mundo, asi como dios la hubiese deseado. -</h2>
                </div>
            </section>
        </>
    )
}