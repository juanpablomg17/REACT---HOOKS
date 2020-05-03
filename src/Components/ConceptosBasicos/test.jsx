import React from 'react';

const Jsx =()=>{

   // const saludo = 'Hola jsx';
   const temperatura = 30;

return (<div>
    <h1>HELLO WORLD </h1>

    <h4>
        {temperatura > 20 ? 'calor': 'frío'}
    </h4>
    </div>)


;
}

export default Jsx;