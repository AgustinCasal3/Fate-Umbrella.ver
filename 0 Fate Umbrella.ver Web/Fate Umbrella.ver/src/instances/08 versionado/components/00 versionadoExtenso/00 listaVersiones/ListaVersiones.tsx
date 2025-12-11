import './ListaVersiones.css';

interface Version {
    version: string;
    versionName: string;
    date: string;
}

interface ListaVersionesProps {
    versions: Version[];
    selectedVersion: string;
    onSelectVersion: (version: string) => void;
}

export function ListaVersiones({ versions, selectedVersion, onSelectVersion }: ListaVersionesProps) {
    return (
        <>
            <div className="listaVersionesExtenso">
                {versions.map((version) => (
                    <label 
                        key={version.version} 
                        className="opcionVersionadoExtenso"
                    >
                        <input 
                            type="radio" 
                            name="version"
                            checked={selectedVersion === version.version}
                            onChange={() => onSelectVersion(version.version)}
                        />
                        <div className="imgSelectorExtenso"></div>
                        <span>{version.version} "{version.versionName}" - {version.date}</span>
                    </label>
                ))}
            </div>
        </>
    )
}