import './Contact.css'



export const Contact = () => {
    
    const form = [{
        namesurname:"",
        email:"",
        tel:"",
        msj:"",
    }]

    const sendContact = (evt) => {
        evt.preventDefault()
        const value = evt.target.email.value
        console.log(value)
        form = [{
            namesurname:evt.target.namesurname.value,
            email:evt.target.email.value,
            tel:evt.target.tel.value,
            msj:evt.target.msj.value,
        }]
    }

    
    return(
        <div className="contact-page">
            <div className="conteiner-form">
                <h1>Contacto</h1>
                <form onSubmit={sendContact} className="form">
                    <input type="text" name="namesurname"  placeholder="Nombre y Apellido" className="inputs"/>
                    <input  type="email" name="email" placeholder="Email" className="inputs"/>
                    <input  type="tel" name="tel" placeholder="Telefono" className="inputs"/>
                    <textarea  name="msj" rows="4" cols="40" placeholder="Mensaje" className="inputs"></textarea>
                    <div>
                        <button type="submit" className="button">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}