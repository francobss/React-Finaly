import "./navbar.css"
import image from "../assets/imglogo.png"
import {CardWidget} from "../CardWidget/CardWidget"
import {Link, NavLink} from 'react-router-dom'


export const NavBar = () =>{
    
    const categorys = [
        {
            url: "nike",
            name: "Nike",
        },
        {
            url: "adidas",
            name: "Adidas",
        },
    ]

    return(
        <header className="navbar-padre">
            <Link to="/"><img src={image} alt="No cargo img" className="navbar-img"/></Link>
            <ul className="navbar-enlaces">
                <li className="navbar-list"><NavLink to="/" className={({isActive})=>isActive === true ? 'activelink-p' : 'link-p'}>Inicio</NavLink></li>
                <li className="navbar-list">
                    <NavLink to="/productos" className={({isActive})=>isActive === true ? 'activelink-p' : 'link-p'}>Productos</NavLink>
                    <ul className="navbar-list__sublist">
                        {
                            categorys.map(cat => {
                                return <li className="navbar-list__text"><NavLink to={`/productos/${cat.url}`} className={({isActive})=>isActive === true ? 'activelink' : 'link'}>{cat.name}</NavLink></li> 
                            })
                        }
                    </ul>
                </li>
                <li className="navbar-list"><NavLink to="/contacto" className={({isActive})=>isActive === true ? 'activelink-p' : 'link-p'}>Contacto</NavLink></li>
            </ul>
            <Link to="/carrito" className="carrito">
                <CardWidget/>
            </Link>
        </header>
    )
}