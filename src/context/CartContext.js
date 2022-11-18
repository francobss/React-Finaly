import { createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    
    const [productosCarrito, setProductosCarrito] = useState([])

    // verifica si el producto en el carrito existe o no
    const isInCart = (id) => {
        const prodExist = productosCarrito.some((elemento) => elemento.id === id)
        return prodExist
    }

    // no me mostraba los porductos porque no lo estaba pasando como objeto"{}"
    const addProdu = ({item, cantidad}) => {
        const productosCarritosCopy = [...productosCarrito] // copia del arreglo base
        
        // si el producto ya existe, modifico la prop cantidad del prod, sino lo agrego al producto
        if(isInCart(item.id)){
            //logica si existe
            const posPord = productosCarritosCopy.findIndex((elemnt) => elemnt.id === item.id )
            productosCarritosCopy[posPord].cantidad = productosCarritosCopy[posPord].cantidad += cantidad
            productosCarritosCopy[posPord].cantidadPrecio = productosCarritosCopy[posPord].cantidad * productosCarritosCopy[posPord].price
            setProductosCarrito(productosCarritosCopy)
            toast.success('Agregado al carrito', {
                position:"bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else{
            // logica si no existe
            const newProduct = {...item, 
                cantidad:cantidad, 
                cantidadPrecio: cantidad * item.price,
            }
            productosCarritosCopy.push(newProduct)
            setProductosCarrito(productosCarritosCopy)
        }
        
    }

    const getTotalPrice = () => {
        const precioTotal = productosCarrito.reduce((acum, item) => acum + item.cantidadPrecio, 0)
        return precioTotal
    }

    const getTotalProd = () => {
        const totalProd = productosCarrito.reduce((acum, item) => acum + item.cantidad, 0 )
        return totalProd
    }

    const removeItem = (id) => {
        const newProd = productosCarrito.filter((elemento) => elemento.id !== id );
        setProductosCarrito(newProd)
    }

    const finallyOrder = () => {
        setProductosCarrito([])
    }

    return(
        <CartContext.Provider value={{productosCarrito, addProdu, getTotalPrice, getTotalProd, removeItem, finallyOrder}}>
            {children}
            <ToastContainer/>
        </CartContext.Provider>
    )
}