import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'


export const ItemDetail = ({item}) => {
    const [contador, setContador] = useState(0);
    const {addProdu} = useContext(CartContext)
    // console.log('itemdetail', item)

    const agregarProd = (cantidad) => {
        setContador(cantidad)
        item.cantidad = cantidad
        addProdu({item, cantidad}) // funcion que viene desde el contexto
    }

    return(
        <div className='item-detail-container'>
            <div>
                <p className='item-detail__t' style={{width: "100%"}}>ITEM DETAIL</p>
                <div>
                    <img className='item-detail__img' src={item.pictureUrl} alt={item.title}/>
                </div>
                <div className='item-detail__'>
                    <h4>{item.title}</h4>
                    <h5>$ {item.price}</h5>
                </div>
                <p className='item-detail__showcont'>productos agregados: {contador}</p>
            </div>
            <div className='item-d-desc'>
                <p className='desc-tit'>Descripcion</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus deleniti incidunt quaerat fuga rem impedit quo omnis laudantium est cumque, quibusdam, 
                    fugit pariatur deserunt, culpa dolor voluptas placeat aliquid!</p>
            </div>
            <ItemCount stock={10} inicial={1} onAdd={agregarProd}/>
        </div>
    )
}