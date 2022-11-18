import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from '../ItemList/ItemList'
import { dataBase } from "../../Utils/firebase"
import {collection, getDocs,} from 'firebase/firestore'
import { Loading } from "../Loading/Loading"
// css
import './ItemListContainer.css'


export const ItemListContainer = () => {
    
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // aca obtenemos todos los productos
        const getData = async() =>{
            // crear referencia del punto acceso de la informacion
            const queryRef = collection(dataBase, 'products')
            // todos los documentos de la coleccion products/
            const response = await getDocs(queryRef)
            // accedemos a dosc donde estan los arreglos
            const documents = response.docs
            const results = documents.map(element => {
                return({
                    ...element.data(),
                    id:element.id
                })
            })
            if(categoryId){
                //filtramos por categoria
                const filteredProduct = results.filter(elm=>elm.category[0] === categoryId);
                setProductos(filteredProduct);
            } else{
                //sino hay la categoria, mostrar todos los productos
                setProductos(results)
            }
        }
        setTimeout(() => {
            setLoading(false)
        },2000)
        setLoading(true)
        getData()
    },[categoryId])


    if(loading){
        return(
            <Loading/>
        )
    }else{
        
        return(
            <div className="item-list-container">
                <p className="item-list-container__title">ITEM LIST CONTAINER</p>
                <ItemList items={productos}/>
            </div>
        )

    }
}