import { useState, useEffect } from 'react';
import axios from 'axios';
import './Versiones.css'

interface Version {
    version: string;
    versionName: string;
    date: string;
    quote?: {
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
}

export function Versiones() {
    const [versions, setVersions] = useState<Version[]>([]);
    const [selectedVersion, setSelectedVersion] = useState<Version | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVersions = async () => {
            try {
                const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
                const res = await axios.get(`${backendURL}/versions`);
                const data = res.data;
                
                // Tomar solo las primeras 5 versiones (que ya vienen ordenadas de más nueva a más vieja)
                const latestVersions = [...data].reverse().slice(0, 5);
                
                setVersions(latestVersions);
                // Seleccionar la primera versión por defecto (la más nueva)
                if (latestVersions.length > 0) {
                    setSelectedVersion(latestVersions[0]);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error cargando versiones:', err);
                setLoading(false);
            }
        };

        fetchVersions();
    }, []);

    if (loading) {
        return (
            <section className="versiones">
                <div className="contenedorVersionado">
                    <h2>Changelog</h2>
                    <p>Cargando versiones...</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="versiones">
                <div className="contenedorVersionado">
                    <h2>Changelog</h2>
                    <div className="contenedorChangelog">
                        <div className="textoCambios">
                            {selectedVersion ? (
                                <>
                                    <h3>{selectedVersion.version} "{selectedVersion.versionName}" - {selectedVersion.date}</h3>
                                    
                                    {selectedVersion.quote && (
                                        <p><i>{selectedVersion.quote.text} - <b>{selectedVersion.quote.author}</b></i></p>
                                    )}
                                    
                                    <p>{selectedVersion.introduction}</p>

                                    {selectedVersion.sections.map((section, index) => (
                                        <div key={index}>
                                            <h4>- {section.title} -</h4>
                                            {section.items.map((item, itemIndex) => (
                                                <p key={itemIndex}>{item}</p>
                                            ))}
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <p>No hay versiones disponibles</p>
                            )}
                        </div>
                        
                        <div className="listaVersiones">
                            {versions.map((version) => (
                                <label 
                                    key={version.version} 
                                    className="opcionVersionado"
                                >
                                    <input 
                                        type="radio" 
                                        name="version"
                                        checked={selectedVersion?.version === version.version}
                                        onChange={() => setSelectedVersion(version)}
                                    />
                                    <div className="imgSelector"></div>
                                    <span>{version.version} "{version.versionName}" - {version.date}</span>
                                </label>
                            ))}

                            <a href="/versionado" className="opcionVersionado">
                                <span>Todas las Versiones</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}