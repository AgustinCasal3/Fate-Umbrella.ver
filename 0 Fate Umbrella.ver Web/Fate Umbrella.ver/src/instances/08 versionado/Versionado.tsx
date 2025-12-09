import './Versionado.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

import { VersionadoExtenso } from './components/00 versionadoExtenso/VersionadoExtenso'

export function Versionado() {

    document.title = 'Versionado | Fate/Umbrella.ver'

    return (
        <>
            <Header />

            <VersionadoExtenso/>

            <Footer />
        </>
    )
}