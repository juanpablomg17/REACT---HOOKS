import React,{Fragment,us}from 'react'

export default function Avatar({urlImagen}) {
    return (
        <Fragment>
           
                <img src={urlImagen} alt="" className="mr-3"/>
         
        </Fragment>
    )
}
