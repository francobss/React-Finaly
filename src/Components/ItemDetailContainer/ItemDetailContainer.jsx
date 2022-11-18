import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { dataBase } from "../../Utils/firebase"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getDoc, doc} from 'firebase/firestore'
import { Loading } from "../Loading/Loading"


export const ItemDetailContainer = () => {
    const {id} = useParams() // traigo el parametro de la url id
    const [prodItem, setProdItem] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async() =>{
            const queryRef = doc(dataBase, 'products', id)
            const response = await getDoc(queryRef)
            const results = {
                ...response.data(),
                id:response.id
            }
            setProdItem(results)
        }
        setTimeout(() => {
            setLoading(false)
        },2000)
        setLoading(true)
        getData()
    },[id])

    if(loading){
        return(
            <Loading/>
        )
    }else{
        return(
            <div>
                <p>ITEM DETAIL CONTAINER</p>
                <ItemDetail item={prodItem}/>
            </div>
        )
    }
    
}