import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../boton/boton"

//Se Puede Tmbn Importar Archivos Solo Desde La Carpeta Nombrandolos "index"
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")

    const [color,actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        {/*preventDefault es un evento para cancelar la actualizacion por evento */}
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo( {titulo, colorPrimario: color})
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            {/*onSubmit es un evento HTML para manejar el evento Enviar*/}
            <h2>
            Rellena el formulario para crear el colaborador.
            </h2>
            <Campo titulo="Nombre" placeholder="Ingresar Nómbre" required valor={nombre} actualizarValor={actualizarNombre}/>

            <Campo titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>

            <Campo titulo="Foto" placeholder="Ingresar Enlace de Foto" required valor={foto} actualizarValor={actualizarFoto}/>

            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}/>

            <Boton>
                Crear
            </Boton>

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            {/*onSubmit es un evento HTML para manejar el evento Enviar*/}
            <h2>
            Rellena el formulario para crear el equipo.
            </h2>
            <Campo titulo ="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>

            <Campo titulo="Color" placeholder="Ingresar Color en Hexadecimal" required valor={color} actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>
}

export default Formulario