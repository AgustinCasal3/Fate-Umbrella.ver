import './Login.css'

import { Header } from '../0 header/Header'
import { Footer } from '../0 footer/Footer'

export function Login() {
    document.title = "Login | Fate/Umbrella.ver"

    return (
        <>
            { Header() }
            <section className="login">
                <div className="contenedorLogin">
                    <div className="imagenLogin"></div>

                    <div className="formularioLogin">
                        <h1>Bienvenido de vuelta, Master!</h1>

                        <form>
                            <label>Email</label>
                            <input type="text" />
                            
                            <label>Password</label>
                            <input type="text" hidden/>

                            <button>Login</button>
                        </form>
                        <p>Olvidaste tu contraseña? <a href="">Recuperar Contraseña</a></p>
                        <p>No tenes una cuenta? <a href="">Registrarse Ahora</a></p>
                    </div>
                </div>
            </section>
            { Footer() }
        </>
    )
}