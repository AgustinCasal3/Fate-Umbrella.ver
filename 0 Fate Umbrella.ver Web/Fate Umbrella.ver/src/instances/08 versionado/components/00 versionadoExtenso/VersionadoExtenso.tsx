import { useState, useEffect } from 'react';
import axios from 'axios';
import './VersionadoExtenso.css';

import { ListaVersiones } from './00 listaVersiones/ListaVersiones';
import { Changelog } from './01 changelogVersion/Changelog';

interface Version {
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
}

export function VersionadoExtenso() {
    const [versions, setVersions] = useState<Version[]>([]);
    const [selectedVersion, setSelectedVersion] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchVersions = async () => {
            try {
                const backendURL = `${window.location.protocol}//${window.location.hostname}:3001`;
                const res = await axios.get(`${backendURL}/versions`);
                const data = res.data;
                
                // Invertir el array acá
                const reversedData = [...data].reverse();
                
                setVersions(reversedData);
                // Seleccionar la primera versión por defecto (ahora será la más nueva)
                if (reversedData.length > 0) {
                    setSelectedVersion(reversedData[0].version);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error cargando versiones:', err);
                setError('Error al cargar las versiones');
                setLoading(false);
            }
        };

        fetchVersions();
    }, []);
    function volverArriba() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const currentVersion = versions.find(v => v.version === selectedVersion);

    if (loading) {
        return (
            <section className="versionadoExtenso">
                <p>Cargando versiones...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="versionadoExtenso">
                <p>{error}</p>
            </section>
        );
    }

    return (
        <>
            <section className="versionadoExtenso">

                <div className="tituloPrincipalVersionado">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <span>Todas las versiones</span>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>

                <div className="contenedorVersionadoExtenso">
                    
                    <ListaVersiones 
                        versions={versions}
                        selectedVersion={selectedVersion}
                        onSelectVersion={setSelectedVersion}
                    />

                    {currentVersion && <Changelog versionData={currentVersion} />}

                </div>

                <div className="contenedorVolverArriba">
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                    <button onClick={volverArriba}>Volver Arriba</button>
                    <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                </div>
            </section>
        </>
    )
}