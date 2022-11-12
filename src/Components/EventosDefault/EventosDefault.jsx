import { useState } from "react"

export const EventoDefault = () => {
    const [statusForm, setStatusForm] = useState("")
    
    const sendForm = (event) => {
        event.preventDefault()
        // el onSubmit recarga la pagina por defecto entonces no se mostraba por clg el form. con esto cancelamos ese efecto 
        console.log("formulario enviado")
        setStatusForm("formulario enviado 2")
    }
    return (
        <div>
            <p>pagina contacto 2</p>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="nombre" ></input>
                <button type="submit"> enviar formulario </button>
            </form>
            <h1>{statusForm}</h1>
        </div>
    )
}