import './Header.css'

export function Header() {
    return (
        <>
            <header>
                <div className="contenedorHeader">
                    <div className="links">
                        
                        <a href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="">Guide</a>
                        <a href="/download">Download</a>
                        
                        {/* <a href="">News</a>
                        <a href="">World</a>
                        <a href="">Servants</a> */}
                    </div>
                    <div className="logo">
                        <img src="../../../imgs/Header/Logo.png" alt="" />
                    </div>
                    <div className="links">
                        <a href="/empresa">Company</a>
                        <a href="/account/izuru.furry">Cuenta</a>

                        {/* <a href="">Gallery</a> */}
                        <a href="https://x.com/ItzAgus386" target='_blank'>Twitter</a>
                        <a href="">Facebook</a>
                    </div>
                </div>
            </header>
            <div className="espaciadorHeader" id='principio'></div>
        </>
    )
}