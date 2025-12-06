import './Owners.css';

export function Owners() {
    return (
        <>
            <div className="ownersEmpresa">
                <div className="contenedorOwnersEmpresa">
                    {/* Componente owner */}
                    <div className="owner">
                        <a href="https://www.youtube.com/@Aquwus" target='_blank'>
                            <img src="../../../imgs/Empresa/Owners/Aquwus.png" alt="Foto de Aquwus" />
                        </a>
                        <span><a href="https://www.youtube.com/@Aquwus" target='_blank'>Aquwus</a></span>
                    </div>
                    <div className="owner">
                        <a href="https://github.com/izruru" target='_blank'>
                            <img src="../../../imgs/Empresa/Owners/Izuru.png" alt="Foto de Izuru" />
                        </a>
                        <span><a href="https://github.com/izruru" target='_blank'>Izuru</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}