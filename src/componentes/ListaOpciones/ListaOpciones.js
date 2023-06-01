import "./ListaOpciones.css"

const ListaOpciones = (props)  =>{
    //Metodo.map es un meetodo solo para arreglos
    //Metodo map -> arreglo.map((equipo, index) =>{
    // return <option></option>
    //})
   

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value) 
    }

    return <div className = "lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable defaultValue="" hidden>seleccionar equipo</option>
            {props.equipos.map((equipo,index)=>{
                return <option key ={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones