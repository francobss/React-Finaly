import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { UsersContext } from "../../../context/UsersContext"

export const ComponenteB = () =>{
    const value = useContext(ThemeContext)
    const perfil = useContext(UsersContext)
    const inputValue = document.getElementById('input-id')
    console.log(inputValue.value)

    console.log('perfil', perfil)
    return(
        <div style={{padding:"10px", margin:"5px", border:"1px solid black"}}>
            <p>Componente B</p>
            <p style={{background:`${value.backgroundTheme}`, fontFamily:`${value.fontFamilyTheme}`}}>{value.fontFamilyTheme}</p>
            <h3>Perfil</h3>
            <p>{perfil.nombre} estas en el curso de {}</p>
            <input id="input-id" placeholder="ingrese el nuevo nombre"></input>
            <button onClick={()=>perfil.setCurso(inputValue.value)}> cambiar nombre</button>
        </div>
    )
}