import {useState} from 'react';
import './ItemCount.css';


export const ItemCount = ({stock, inicial, onAdd})=>{
    const [count, setCount] = useState(inicial);

    const increase = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    const decrease = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    return(
        <div className='item-count-container'>
            <p>Stock disponible: {stock}</p>
            <div className='item-count__buttons'>
                <button disabled={stock===0} onClick={decrease} className='buttons'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={increase} className='buttons'>+</button>
            </div>
            <button disabled={stock === 0} className='buttonAdd' onClick={()=>onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}