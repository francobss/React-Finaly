// import AirForce from "../assets/airforce.JPG"
// import AirForceBlack from "../assets/airforceblackbrown.jpg"
// import AirMax from "../assets/airmax1.webp"
// import AirMax97 from "../assets/airmax97.webp"
// import AdidasPath from "../assets/pathrun.jpg"
// import AdidasY350 from "../assets/Y350.jpg"
// import AdidasY350N from "../assets/yeezy-350-negras.jpg"
// import AdidasForum from "../assets/Zapatillas_Forum_Low_Blanco_GX1018_01_standard.jpg"
// import NikeAirJordan from "../assets/nike/nikeairjodan.jpg"
// import NikeAirMAxJB from "../assets/nike/nikeairmaxjewellblack1.jpg"


// const random = Math.floor(Math.random() * (1000 - 100 + 1) + 100);

// export const arregloProductos = [
//     {id:1, title: "Nike Air Force", price: "250 Usd", pictureUrl: AirForce, category: "prod1", cantidad: 0},
//     {id:2, title: "Nike Air Force Black", price: "400 Usd", pictureUrl: AirForceBlack, category: "prod2", cantidad: 0},
//     {id:3, title: "Nike Airmax", price: "450 Usd", pictureUrl: AirMax, category: "prod3", cantidad: 0},
//     {id:4, title: "Nike Airmax 97", price: "400 Usd", pictureUrl: AirMax97, category: "prod1", cantidad: 0},
//     {id:5, title: "Adidas Path Run", price: "550 Usd", pictureUrl: AdidasPath, category: "prod3", cantidad: 0},
//     {id:6, title: "Adidas Yeezy 350", price: "600 Usd", pictureUrl: AdidasY350, category: "prod2", cantidad: 0},
//     {id:7, title: "Adidas Yeezy 350 black", price: "490 Usd", pictureUrl: AdidasY350N, category: "prod3", cantidad: 0},
//     {id:8, title: "Adias Forum white", price: "800 Usd", pictureUrl: AdidasForum, category: "prod2", cantidad: 0},
//     {id:9, title: "Nike Air Jordan", price: "570 Usd", pictureUrl: NikeAirJordan, category: "prod1", cantidad: 0},
//     {id:10, title: "Nike Airmax Jewell Black", price: "300 Usd", pictureUrl: NikeAirMAxJB, category: "prod1", cantidad: 0}
// ]

import {collection, getDocs} from 'firebase/firestore'
import { useState} from "react"
import { dataBase } from "../../Utils/firebase"


export const DataBase = () =>{
    const [arregloProductos, setArregloProductos] = useState([])


// aca obtenemos todos los productos
    const getData = async() =>{
        // crear referencia del punto acceso de la informacion
        const queryRef = collection(dataBase, 'products')
        // todos los documentos de la coleccion products/
        const response = await getDocs(queryRef)
        console.log(response)
        // accedemos a dosc donde estan los arreglos
        const documents = response.docs
        const results = documents.map(element => {
            return({
                ...element.data(),
                id:element.id
            })
        })
        setArregloProductos(results)
    }
    getData()
    console.log(arregloProductos)
}