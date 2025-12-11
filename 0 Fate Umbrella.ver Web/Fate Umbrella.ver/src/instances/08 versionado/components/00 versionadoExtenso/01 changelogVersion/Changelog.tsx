import './Changelog.css';

interface ChangelogProps {
    versionData: {
        version: string;
        versionName: string;
        date: string;
        quote: {
            text: string;
            author: string;
        };
        introduction: string;
        summary: string;
        sections: Array<{
            title: string;
            type: string;
            items: string[];
        }>;
        images: Array<{
            title: string;
            src: string;
            alt: string;
        }>;
        devNotes: {
            text: string[];
            conceptArt: {
                src: string;
                artist: string;
                link: string;
            } | null;
        };
    };
}

export function Changelog({ versionData }: ChangelogProps) {
    return (
        <>
            <div className="changelogVersionExtenso">
                <div className="tituloVersionado">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <p>
                        <span>{versionData.version}</span>
                        <span>"{versionData.versionName}"</span>
                        <span> - {versionData.date}</span>
                    </p>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>

                {versionData.quote && (
                    <h3 className='textoVCentrado'>
                        {versionData.quote.text} <b>- {versionData.quote.author}</b>
                    </h3>
                )}

                <p className='textoVCentrado'>{versionData.introduction}</p>

                <h2>Registro de cambios</h2>
                <p className='sangria'>{versionData.summary}</p>

                {versionData.sections.map((section, index) => (
                    <div key={index}>
                        <h3>- {section.title} -</h3>
                        {section.type === 'list' ? (
                            <ul>
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}><p>{item}</p></li>
                                ))}
                            </ul>
                        ) : (
                            section.items.map((item, itemIndex) => (
                                <p key={itemIndex} className='sangria'>{item}</p>
                            ))
                        )}
                    </div>
                ))}

                {versionData.images.map((image, index) => (
                    <div key={index} className="imagenChangelog">
                        <h3>{image.title}</h3>
                        <div className="imgChangelog">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    </div>
                ))}

                <div className="contenedorNotasDev">
                    <div className="tituloVersionado">
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                        <p>
                            <span>Notas del</span>
                            <span>Desarrollador</span>
                        </p>
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                    </div>
                    <div className="contenidoNotasDev">
                        <div className="izqNotasDev">
                            {versionData.devNotes.text.map((paragraph, index) => (
                                <p key={index} className='sangria'>{paragraph}</p>
                            ))}
                        </div>
                        {versionData.devNotes.conceptArt && (
                            <div className="derNotasDev">
                                <a href={versionData.devNotes.conceptArt.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={versionData.devNotes.conceptArt.src} alt="Concept Art" />
                                </a>
                                <p>Imagen concebida por: <b>{versionData.devNotes.conceptArt.artist}</b></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}