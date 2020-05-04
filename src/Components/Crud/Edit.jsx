import React, { Fragment} from 'react'
import { useForm } from 'react-hook-form';

export default function EditForm(props) {

    const { register, errors, handleSubmit } = useForm();


    const onSubmit = (data, e) => {
        //console.log(data)
        props.addUsers(data);

        e.target.reset()
    }




    return (

        <Fragment>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" name="name"
                        placeholder="Nombre"
                        ref={
                            register({
                                required: { value: true, message: 'Nombre Obligatorio' },
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' }

                            })
                        } />
                    <span className="text-danger text-samll d-block mb-2">
                        {errors.nombre && errors.nombre.message}
                    </span>
                </div>
                <div className="form-group">
                    <input type="text" name="username"
                        placeholder="Username"
                        ref={
                            register({
                                required: { value: true, message: 'Usuario Obligatorio' },
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' }

                            })
                        } />
                    <span className="text-danger text-samll d-block mb-2">
                        {errors.username && errors.username.message}
                    </span>
                </div>

                <button className="btn btn-primary">Edit user</button>


            </form>
             


        </Fragment >

    )
}