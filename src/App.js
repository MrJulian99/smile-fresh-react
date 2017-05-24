import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">

          <div class="overlay"></div>


          <ol class="carousel-indicators">
            <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#bs-carousel" data-slide-to="1"></li>
            <li data-target="#bs-carousel" data-slide-to="2"></li>
          </ol>


          <div class="carousel-inner">
            <div class="item slides active">
              <div class="slide-1"></div>
              <div class="overlay"></div>
              <div class="hero">
                <hgroup>
                    <h1>Smile Fresh</h1>
                    <h3>Opciones de financiamiento</h3>
                </hgroup>

              </div>
            </div>
            <div class="item slides">
              <div class="slide-2"></div>
              <div class="overlay"></div>
              <div class="hero">
                <hgroup>
                    <h1>Smile Fresh</h1>
                    <h3>Ortodoncia sin cuota inicial</h3>
                </hgroup>

              </div>
            </div>
            <div class="item slides">
              <div class="slide-3"></div>
              <div class="overlay"></div>
              <div class="hero">
                <hgroup>
                    <h1>Smile Fresh</h1>
                    <h3>Pregunta por nuestros planes familiares</h3>
                </hgroup>

              </div>
            </div>
          </div>
        







        </div>
        <div className="App-navbar">

        <nav class="navbar navbar-inverse">
       <div class="container-fluid">
       <div class="navbar-header">
       </div>
    <ul id='nav' class="nav navbar-nav">

    <li class="active"><a href="#">Smile-Fresh</a></li>
    <li><a href="#">Doctores</a></li>
    <li><a href="#">Horarios</a></li>
    <li><a href="#">Agendar Cita</a></li>
    <li><a href="#">Listado de Pacientes</a></li>
    <li><a href="#">Citas</a></li>
    <li><a href="#">Recaudado</a></li>

  </ul>
</div>
</nav>


        </div>


        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
