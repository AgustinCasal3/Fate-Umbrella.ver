import './EmpresaInfo.css'

import { Owners } from './01 owners/Owners';
import { Empleados } from './02 empleados/Empleados';

export function EmpresaInfo() {
    return (
        <>
            <section className="empresa">
                <div className="nombreEmpresa">
                    <img src="../../../imgs/Empresa/CunnyLogo.png" alt="Logo" />
                </div>

                <div className="integrantesEmpresa">

                    <div className="tituloIntegrantesEmpresa">
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                        <span>Nuestros fundadores</span>
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                    </div>
                    
                    <Owners/>

                    <div className="tituloIntegrantesEmpresa">
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" />
                        <span>Nuestro equIpo</span>
                        <img src="../../../imgs/Empresa/SeparadorDiv.png" alt="" className='invertidoHorizontal'/>
                    </div>

                    <Empleados/>
                </div>
            </section>
        </>
    )
}