import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    
    {/*"Props" son las propiedades de los componentes; son datos que podemos enviar a los componentes para que se comporten de una forma especifica*/}

    const {type = "text"} = props
    const placeholderModificado = `${props.placeholder}...`
    const manejarCambio = (e) =>{
        console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder ={placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type = {type}
        />
        {/*"placeholder" es el texto que aparece en la parte de atras antes de ingresar dsatos*/}
        
    </div>
}

export default Campo