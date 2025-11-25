import './FateSeries.css'

export function FateSeries() {
    return (
        <>
            {/* Cada uno de los comentarios tiene que ser un componente para que se actualice con la base de datos */}
            <section className="fateSeries">
                <div className="contenedorSeries">
                    <div className="contenedorUmbrella">
                        <h2>Fate/Umbrella.ver</h2>
                        <div className="contenedorChapters">
                            {/* Fate Umbrella Cap 1 */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Umbrella/fondo_ch1.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Umbrella/logo_ch1.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            {/* Fate Umbrella Cap 2 */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Umbrella/fondo_ch2.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Umbrella/logo_ch2.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            {/* Fate Umbrella Cap 3 */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Umbrella/fondo_ch3.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Umbrella/logo_ch3.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="espaciadorSeries">
                        {/* Este tiene que ser una imagen */}
                    </div>
                    <div className="contenedorFate">
                        <h2>Historias Fate Recomendadas</h2>
                        <div className="contenedorFateSeries">
                            {/* Fate GO */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatego_fondo.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Fate/fatego_logo.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            {/* Fate Zero */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatezero_fondo.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Fate/fatezero_logo.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            {/* Fate Stay Night */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatesn_fondo.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Fate/fatesn_logo.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            {/* Fate Last Encore */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fatele_fondo.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Fate/fatele_logo.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            {/* Fate CCC */}
                            <div className="itemSeries" 
                                style={{
                                    backgroundImage: 'url("../../../imgs/Home/FateSeries/Fate/fateccc_fondo.png")'
                                }}>
                                <div className="contenedorItemSeries">
                                    <img src="../../../imgs/Home/FateSeries/Fate/fateccc_logo.png" alt="" className="logoSerie" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}