import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartContainer.css'
import swal from 'sweetalert';
// base de datos Firebase
import { dataBase } from "../../Utils/firebase"
import { collection, addDoc} from "firebase/firestore"
import cart2 from "./cart2.svg"



export const CartContainer = () =>{
    const value = useContext(CartContext)
    const {productosCarrito, getTotalPrice, getTotalProd, removeItem, finallyOrder} = value
    const [compraId, setCompraId] = useState("")
    const sendOrder = (evt) => {
        evt.preventDefault()
        const compra = {
            buyer: { 
                name: evt.target[0].value, 
                phone: evt.target[1].value,
                email: evt.target[2].value,
            }, 
                items: productosCarrito,
                total: getTotalPrice(),
        }
        const queryRef = collection(dataBase, 'orders');
        // agregar informacion a la firebase
        addDoc(queryRef, compra).then((result) => {
            setCompraId(result.id)
            finallyOrder()
            swal({
                title:"Compra realizada",
                text: `ID compra: ${result.id}`,
                icon: "success",
                button: "Aceptar",
            })
        })
    }
    // condicion si el carrito no tiene nada.
    if(getTotalProd() === 0){
        if(compraId){
            return(
                <div >
                    <div className="carrito-vacio">
                        <img src={cart2} alt="" />
                        <p className="carrito-vacio_p">sin productos en el carrito</p>
                        <Link to="/">
                            <button>Ir al listado de productos.</button>
                        </Link>
                    </div>
                </div>
            )
        }
    }else{
        return(
            <div className="Card_padre">
                <div className="Card_container">
                    <div>
                        {
                            productosCarrito.map((producto) => (
                                <div className="Card_item">
                                    <img src={producto.pictureUrl} alt={producto.title} className="Card_img"></img>
                                    <h3 className="Card_title">{producto.title}</h3>
                                    <p className="Card_p">Precio: {producto.price} Usd</p>
                                    <p className="Card_p">Cantidad: {producto.cantidad}</p>
                                    <p className="Card_p">Precio General: {producto.cantidadPrecio} Usd</p>
                                    <button onClick={() =>removeItem(producto.id)} >ELiminar producto</button>
                                </div>
                            ))
                        }
                    </div>
                    <form onSubmit={sendOrder} className="cart-form">
                        <h3>Realizar compra.</h3>
                        <label>Nombre</label>
                        <input type="text" name="nombre" placeholder="nombre"></input>
                        <label>Telefono</label>
                        <input type="tel" name="tel" placeholder="telefono"></input>
                        <label>Correo</label>
                        <input type="email" name="email" placeholder="correo"></input>
                        <button type="submit" className="cart-form__buttom">Enviar orden.</button>
                    </form>
                </div>
                <div className="Card_pricetotal_cont">
                    <p className="Card_pricetotal">Total de productos: {getTotalProd()}</p>
                    <p className="Card_pricetotal">Precio Total:  {getTotalPrice()} Usd</p>
                </div>
            </div>
        )
    }
}