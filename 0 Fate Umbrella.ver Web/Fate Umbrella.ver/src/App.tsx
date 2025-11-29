import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import './App.css'

import { AuthProvider } from "./context/AuthContext";

import { Home } from './instances/01 home/Home'  // 01
import { Registro } from './instances/02 registro/Registro' // 02
import { Login } from './instances/03 login/Login' // 03
import { Cuenta } from './instances/04 cuenta/Cuenta' // 04
import { Descarga } from './instances/05 descarga/Descarga' // 05
import { Empresa } from './instances/06 empresa/Empresa' // 06
import { Versionado } from './instances/08 versionado/Versionado' // 08
import { Verificacion } from './instances/10 verificacion/Verificacion'; //10

function Pagina() {
  return (
    <>
      <Outlet />
    </>
  )
}

function Index() {
  return (
    <>
      <div className="contenedorPlaceholder">
        <div className="botonesPlaceholder">
          <a href="/">Home</a>
          <a href="/register">Registro</a>
          <a href="/login">Login</a>
          <a href="/account">Cuenta</a>
          <a href="/download">Descargar</a>
          <a href="/empresa">Empresa</a>
          <a href="/guide">Guia</a>
          <a href="/versions">Versiones</a>
        </div>
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pagina />,
    errorElement: '',
    children: [
      {
        index: true, // Ruta: / 01
        element: <Home />,
      },
      {
        path: 'login', // 02
        element: <Login />,
      },
      {
        path: 'register', // 03
        element: <Registro />,
      },
      {
        path: 'download', // 05
        element: <Descarga />,
      },
      {
        path: 'account/:username', // 04
        element: <Cuenta />,
      },
      {
        path: 'empresa', // 06
        element: <Empresa />,
      },
      {
        path: 'versionado', // 08
        element: <Versionado />,
      },
      {
        path: 'verify/:token', // 10
        element: <Verificacion />,
      },
      {
        path: 'index', // XX
        element: <Index />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
