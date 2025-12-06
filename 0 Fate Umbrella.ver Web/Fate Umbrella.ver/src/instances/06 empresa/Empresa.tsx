import './Empresa.css'

import { Header } from '../0 header/Header';
import { Footer } from '../0 footer/Footer';

import { EmpresaInfo } from './components/01 empresa/EmpresaInfo';
import { QuienesSomos } from './components/02 quienesSomos/QuienesSomos';
import { MisionVision } from './components/03 misionVision/MisionVision';
import { Valores } from './components/04 valores/Valores';
import { Reclutamiento } from './components/05 reclutamiento/Reclutamiento';

export function Empresa() {
    document.title = 'CunnyWorks | Fate/Umbrella.ver';

    

    return (
        <>
            <Header/>

            <EmpresaInfo/>

            <QuienesSomos/>

            <MisionVision/>

            <Valores/>

            <Reclutamiento/>
            
            <Footer/>    
        </>
    )
}