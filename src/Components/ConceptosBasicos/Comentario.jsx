import React,{Fragment,us}from 'react'

import Avatar from './Avatar';

export default function Comentario({sujeto}) {
    return (
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                {/* <img src={sujeto.urlImagen} alt="" className="mr-3"/> */}
                <Avatar urlImagen={sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-5">
                       {sujeto.nombre}
                    </h5>
                    {sujeto.text}
                </div>
            </div>
            
        </Fragment>
    )
}
