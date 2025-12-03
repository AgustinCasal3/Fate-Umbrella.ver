import './Header.css'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react';

export function Header() {

    const { user, logout } = useAuth();   // ← agregamos logout
    const navigate = useNavigate();       // ← para redirigir

    const handleLogout = () => {
        logout();          // limpia localStorage + contexto
        navigate("/");     // redirige al Home
    };

    //MENU HAMBURGUESA 
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const cerrarMenu = () => {
        setMenuAbierto(false);
    };

    const menuLinks = useMemo(() => {
        const links = [];
        
        links.push({ href: "/", text: "Home" });
        
        if (!user) {
            links.push({ href: "/login", text: "Login" });
        }
        
        if (user) {
            links.push({ href: `/account/${user.username}`, text: "Cuenta" });
        }
        
        links.push({ href: "", text: "Guide" });
        links.push({ href: "/empresa", text: "Company" });
        
        if (!user) {
            links.push({ href: "/register", text: "Register" });
        }
        
        if (user) {
            links.push({ onClick: handleLogout, text: "Logout" });
        }
        
        links.push({ href: "https://x.com/ItzAgus386", text: "Twitter", target: "_blank" });
        links.push({ href: "", text: "Facebook" });
        
        return links;
    }, [user]);

    return (
        <>
            <header>
                <div className="contenedorHeaderDesktop">
                    
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

                <div className="contenedorHeaderMobile">
                    <div className="logoJuegoMobile">
                        <a href="/">
                            <img src="../../../imgs/Home/Titulo/Logo5.png" alt="" />
                        </a>
                    </div>

                    <div 
                        className={`menuHamburguesa ${menuAbierto ? 'equis' : 'borgir'}`} 
                        onClick={toggleMenu}
                    ></div>
                </div>

                {/* MENÚ DESPLEGABLE MOBILE */}
                <div className={`menuDesplegable ${menuAbierto ? 'abierto' : ''}`}>
                    <nav className="linksMobile" onClick={cerrarMenu}>
                        {menuLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={link.onClick || cerrarMenu}
                                target={link.target}
                                className={menuAbierto ? 'aparecer' : ''}
                                style={{
                                    animationDelay: `${index * 0.15}s`
                                }}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <div className="espaciadorHeader" id='principio'></div>
        </>
    )
}
