import {Item} from '../Item/Item'
import './ItemList.css'


export const ItemList = ({items}) => {
    return(
        <div className='item-list'>
            <div className='item-list__title'>ITEM LIST</div>
            <div className='item-list__components'>
                {
                    items.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                    ))
                }
            </div>
        </div>
    )
}