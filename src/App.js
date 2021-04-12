import React,{ Fragment } from 'react';
import Navbar from './Components/Navbar.component/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Productos from './Components/Productos.component/Productos';
import Contacto from './Components/Contacto.component/Contacto';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/Contacto" component={Contacto}>  
            </Route>
            <Route path="/Productos" component={Productos}>
            </Route>
            <Route exact path="/" component={Homepage}>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;