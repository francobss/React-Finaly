import {Link} from "react-router-dom";
import './Item.css'


export const Item = ({item})=>{
    
    return(
        <div className="item-card">
            {/* <p className="item-title">ITEM</p> */}
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle</button>
            </Link>
        </div>
    )
}