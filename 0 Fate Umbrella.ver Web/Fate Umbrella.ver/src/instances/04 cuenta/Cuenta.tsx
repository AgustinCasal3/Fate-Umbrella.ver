import './Cuenta.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

import { InfoCuenta } from './components/01 cuenta/InfoCuenta'
import { ServantsCuenta } from './components/02 servantsCuenta/ServantsCuenta'
import { AmigosCuenta } from './components/03 amigosCuenta/AmigosCuenta'

export function Cuenta() {
    document.title = 'NOMBRE USUARIO | Fate/Umbrella.ver'

    return (
        <>
            <Header/>

            <InfoCuenta/>

            <ServantsCuenta/>

            <AmigosCuenta/>

            <Footer/>
        </>
    )
}