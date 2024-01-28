import logo from "./logo.jpeg"
import CartWidget from "../CartWidget/CartWidget"
import estilo from "./NavBar.module.css"

const NavBar = () => {
    let home = "#";
    return (
        <nav className={`navbar ${estilo.barraNavegacion}`}>
            <div className={`container-fluid ${estilo.barraNavegacion}`}>
                <img src={logo} alt="Logo" width="50" height="50" className={estilo.logoArea}/>
                <a className={`navbar-brand ${estilo.nombreEmpresa}`} href={home}>Optica Luz</a>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar