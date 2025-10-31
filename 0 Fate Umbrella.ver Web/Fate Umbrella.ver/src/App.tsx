import './App.css'
import { Home } from './instances/01 home/Home'
import { Login } from './instances/03 login/Login'

function App() {
  return (
    <>
      {/* { Home() } */}
      { Login() }

      {/* <div className="contenedorPlaceholder">
        <div className="botonesPlaceholder">
          <a href="">Home</a>
          <a href="">Registro</a>
          <a href="">Login</a>
          <a href="">Cuenta</a>
          <a href="">Descargar</a>
          <a href="">Empresa</a>
          <a href="">Guia</a>
          <a href="">Versiones</a>
        </div> USAR NEXT para hacer paginasW
      </div> */}
    </>
  )
}

export default App
