import React, {Fragment,useState} from 'react'

export default function saludo(props) {

    return (
        <Fragment>
            <div>
            <h2>Hola! {props.persona}</h2>
            </div>
        </Fragment>
        
    )
}
