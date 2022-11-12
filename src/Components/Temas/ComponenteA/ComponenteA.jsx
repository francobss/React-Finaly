import {useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { UsersContext } from '../../../context/UsersContext'

export const ComponenteA = () =>{
    const value = useContext(ThemeContext)
    const perfil = useContext(UsersContext)
    console.log('Value', value)
    return(
        <div style={{padding:"10px", margin:"5px", border:"1px solid black"}}>
            <p>Componente A</p>
            <p>{value.backgroundTheme}</p>
            <p>{perfil.curso}</p>
        </div>
    )
}