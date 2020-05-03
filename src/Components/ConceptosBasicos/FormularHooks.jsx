import React, { Fragment, useState } from 'react'
import {useForm} from 'react-hook-form';

export default function FormularHooks() {

    const {register,errors,handleSubmit} = useForm();
    const [entradas,setEntradas] = useState([]);

    const onSubmit = (data,e) => {
        console.log(data)
        setEntradas({
            ...entradas,
            data
        })
        e.target.reset()
    }

    


    return (

        <Fragment>
            <div className="row mt-5 ml-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Formulario</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" name="nombre"
                                        placeholder="Nombre"
                                        ref={
                                            register({
                                                required: {value: true, message: 'Nombre Obligatorio'},
                                                minLength: {value: 2, message: 'Mínimo 10 caracteres'}
                                                
                                            })
                                        } />
                                    <span className="text-danger text-samll d-block mb-2">
                                        {errors.nombre && errors.nombre.message}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="descripcion"
                                        placeholder="Descripción"
                                        ref={
                                            register({
                                                required: {value: true, message: 'Descripción Obligatoria'},
                                                minLength: {value: 2, message: 'Mínimo 10 caracteres'}
                                                
                                            })
                                        } />
                                    <span className="text-danger text-samll d-block mb-2">
                                        {errors.descripcion && errors.descripcion.message}
                                    </span>
                                </div>
                                
                                <button className="btn btn-primary">Enviar</button>
                            
                                
                            </form>
                        </div>
                    </div>

                </div>
            </div>




        </Fragment>

    )
}
