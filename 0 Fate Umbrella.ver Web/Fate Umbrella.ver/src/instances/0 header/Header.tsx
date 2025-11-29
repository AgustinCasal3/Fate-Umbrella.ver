import './Header.css'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Header() {

    const { user, logout } = useAuth();   // ← agregamos logout
    const navigate = useNavigate();       // ← para redirigir

    const handleLogout = () => {
        logout();          // limpia localStorage + contexto
        navigate("/");     // redirige al Home
    };

    return (
        <>
            <header>
                <div className="contenedorHeader">
                    
                    {/* IZQUIERDA */}
                    <div className="links">
                        <a href="/">Home</a>

                        {!user && <a href="/login">Login</a>}

                        {user && (
                            <>
                                <a href={`/account/${user.username}`}>Cuenta</a>
                            </>
                        )}

                        <a href="">Guide</a>
                        <a href="/download">Download</a>
                    </div>

                    {/* LOGO */}
                    <div className="logo">
                        <img src="../../../imgs/Header/Logo.png" alt="" />
                    </div>

                    {/* DERECHA */}
                    <div className="links">
                        <a href="/empresa">Company</a>

                        {!user && <a href="/register">Register</a>}

                        {user && (
                            <>
                                {/* Botón logout */}
                                <a onClick={handleLogout}> Logout </a>
                            </>
                        )}

                        <a href="https://x.com/ItzAgus386" target='_blank'>Twitter</a>
                        <a href="">Facebook</a>
                    </div>

                </div>
            </header>

            <div className="espaciadorHeader" id='principio'></div>
        </>
    )
}
