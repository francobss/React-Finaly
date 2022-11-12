import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { dataBase } from "../../Utils/firebase"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import {collection, getDocs} from 'firebase/firestore'


// useParams sirve para capturar el 'id' en este caso del url /item/id

export const ItemDetailContainer = () => {
    const {id} = useParams() // traigo el parametro de la url id
    const [prodItem, setProdItem] = useState({});
    // console.log('id del params',id)

    useEffect(() => {
        const getData = async() =>{
            const queryRef = collection(dataBase, 'products')
            const response = await getDocs(queryRef)
            const documents = response.docs
            const results = documents.map(element => {
                return({
                    ...element.data(),
                    id:element.id
                })
            })
            if(id){
                //filtramos por id
                const filteredProduct = results.find(elm=>elm.id === id);
                setProdItem(filteredProduct);
            }
        }
        getData()
    },[id])

    return(
        <div>
            <p>ITEM DETAIL CONTAINER</p>
            <ItemDetail item={prodItem}/>
        </div>
    )
}