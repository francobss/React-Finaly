import { useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { UsersContext } from "../../../context/UsersContext"

import { ComponenteA } from "../ComponenteA/ComponenteA"
import { ComponenteB } from "../ComponenteB/ComponenteB"


export const PaginaContexto = () => {
    const [curso, setCurso] = useState("")
    
    return(  
        <div> 
            <p>Pagina contexto.</p>
            <UsersContext.Provider value={{nombre:"Rodrigo", edad:25, curso:curso, setCurso: setCurso}}>
                <ThemeContext.Provider value={{backgroundTheme:"blue", fontFamilyTheme:"Arial"}}>
                    <ComponenteA/>
                    <ComponenteB/>
                </ThemeContext.Provider>
            </UsersContext.Provider>
            
        </div>
    )
}