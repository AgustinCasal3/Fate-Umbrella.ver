import './Header.css'

export function Header() {
    return (
        <>
            <header>
                <div className="contenedorHeader">
                    <div className="links">
                        <a href="">Home</a>
                        <a href="">News</a>
                        <a href="">World</a>
                        <a href="">Servants</a>
                    </div>
                    <div className="logo">
                        <img src="../../../imgs/Header/Logo.png" alt="" />
                    </div>
                    <div className="links">
                        <a href="">Gallery</a>
                        <a href="">Guide</a>
                        <a href="">Twitter</a>
                        <a href="">Facebook</a>
                    </div>
                </div>
            </header>
            <div className="espaciadorHeader"></div>
        </>
    )
}