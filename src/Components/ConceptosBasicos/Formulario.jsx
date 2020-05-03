

import React, { Fragment, useState } from 'react'

export default function Formularios() {
    
    const [datos,setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const HandleInputChange = (e) =>{
        console.log(e.target.value)
        setDatos({
            ...datos, 
            [e.target.name] : e.target.value
        })
    }
    
    const enviarDatos = (e) => {
        console.log("holas")
        e.preventDefault();
    }



    return (
        <Fragment>
            <div className="container mt-5">
                <h1>FORMULARIO</h1>
                <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input className="form-control" type="text"
                     placeholder="Ingrese su Nombre" name="nombre"
                     onChange={HandleInputChange}/>
                     
                </div>
                <div className="col-md-3">
                    <input className="form-control" type="text"
                     placeholder="Ingrese su Apellido" name="apellido"
                     onChange={HandleInputChange}
                     />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                </form>
                
            </div>
    

        </Fragment>
    )
}
