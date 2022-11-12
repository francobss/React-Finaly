// import React, { useState } from "react";


// export const CartContext = React.createContext();

// export const CustomProvider = ({children}) => {

//     const [productosCarrito, setProductosCarrito] = useState([])

//     const agProd = (nuevoProd) => {
//         const nuevosProductos = [...productosCarrito]
//         nuevosProductos.push(nuevoProd)
//         setProductosCarrito(nuevosProductos)
//         console.log('nuevos pord', nuevosProductos)
//     }

//     console.log("productosCarrito", productosCarrito)

//     return(
//         <CartContext.Provider value={{nombre:"fredy", productosCarrito, agProd}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

import { createContext, useState} from 'react'

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
        }else{
            // logica si no existe
            const newProduct = {...item, 
                cantidad:cantidad, 
                cantidadPrecio: cantidad * item.price,
            }
            // console.log('new prod', newProduct)
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
        </CartContext.Provider>
    )
}