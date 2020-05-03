import React,{useState,Fragment} from 'react'


const Lista =()=>{

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])

    const [numero,setNumero] = useState(1);


    const agregarElemento = () => {
        
        setNumero(
            ...numero,
            25
        )

        setArrayNumero([
            ...arrayNumero,
            6
        ])
    }

return (<div>
    <h1>Lista</h1>
    <button onClick={agregarElemento}>AGREGAR</button>
        { 
            arrayNumero.map((item, index) => {
            return(
            <div>
                <p>{item} - {index}</p>
                
            </div>
            
            )
           
            })
        }
        
    </div>)


;
}

export default Lista;