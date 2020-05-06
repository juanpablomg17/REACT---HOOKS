import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


// componentes
import ExampleCrud from './Components/Main/ExampleCrud';
import Prototipo from './Components/Prototipo/main/main';





function App() {

  return (

    <Router>
      <div className="container mt-5">
        <div className="btn-group ">
          <NavLink to="/" exact className="btn btn-dark mr-5" activeClassName='active' >
            Inicio</NavLink>
        
        <NavLink to="/example/crud" exact className="btn btn-dark mr-5" activeClassName='active' >
          Crud Example</NavLink>
        <NavLink to="/prototipo" exact className="btn btn-dark mr-5" activeClassName='active' >
          Prototipo</NavLink>
          </div>

      </div>
      <hr />
      <Switch>
        <Route path="/example/crud" exact>
          <ExampleCrud />
        </Route>
        <Route path="/prototipo" exact>
          <Prototipo />
        </Route>
        <Route path="/" exact>
          este es el inicio
        </Route>
      </Switch>
    </Router>

  );
};



export default App;
