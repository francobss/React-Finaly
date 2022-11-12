import "./navbar.css"
import image from "../assets/imglogo.png"
import {CardWidget} from "../CardWidget/CardWidget"
import {Link} from 'react-router-dom'


export const NavBar = () =>{
    
    
    return(
        <header className="navbar-padre">
            <Link to="/"><img src={image} alt="No cargo img" className="navbar-img"/></Link>
            <ul className="navbar-enlaces">
                <li className="navbar-list"><Link to="/">Inicio</Link></li>
                <li className="navbar-list">
                    <Link to="/productos">Productos</Link>
                    <ul className="navbar-list__sublist">
                        <li className="navbar-list__text"><Link to="/productos/nike">Nike</Link></li>
                        <li className="navbar-list__text"><Link to="/productos/adidas">Adidas</Link></li>
                    </ul>
                </li>
                <li className="navbar-list"><Link to="/contacto">Contacto</Link></li>
            </ul>
            <Link to="/carrito" className="carrito">
                <CardWidget/>
            </Link>
        </header>
    )
}