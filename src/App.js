import React, { Component } from 'react';
import './App.css';
import Doctores from './Doctores';
import listaPacientes from './listaPacientes';



import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'
class App extends Component {
  render() {
    return (

 <Router>
 <div className="App">
 <div className="App-header">
   <h1>Smile Fresh</h1>
 </div>
 <div className="App-navbar">
   <nav class="navbar navbar-inverse">
      <div class="container-fluid">
         <ul class="nav navbar-nav">

                 <li><Link to="/">Smile-Fresh</Link></li>

                 <li><Link to="/doctores">Doctores</Link></li>
                 <li><a href="#">Horarios</a></li>
                 <li><a href="#">Agendar Cita</a></li>
                 <li><Link to="/listaPacientes">Pacientes</Link></li>
                 <li><a href="#">Citas</a></li>
                 <li><a href="#">Recaudado</a></li>

         </ul>
       </div>
     </nav>




      <Route path="/doctores" component={Doctores}/>
      <Route path="/listaPacientes" component={listaPacientes}/>




   </div>



<h1>Esta es la pagina de inicio</h1>





 </div>
</Router>

    );
  }
}

export default App;
