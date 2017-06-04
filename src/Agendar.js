import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './CitasRegistradas'
import styles from 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios';
import Modal from 'react-modal';
import classNames from 'classnames'

BigCalendar.momentLocalizer(moment);




export default class Agendar extends Component{


  constructor(){
    super();

    this.closeModal = this.closeModal.bind(this);
    this.asignarCita = this.asignarCita.bind(this);
    this.handlePacienteChange = this.handlePacienteChange.bind(this);
    this.handleValorChange = this.handleValorChange.bind(this);

    this.state = {
      citasDisponibles: [],
      citaActiva: {},
      isActive: false,
      paciente: "",
      valor: "",
      pacientes: []
    }

    var citas;
    var pacientes;
    axios.get('http://localhost:3888/api/cita').then((response)=>{
      citas = response.data;
      citas = citas.filter(function(item){
        return item.estado  == "Disponible"
      });

      for (var i = 0; i < citas.length; i++) {
        citas[i].title = citas[i].estado + citas[i].hora;
      }

      this.setState({citasDisponibles: citas});

    }, (err) =>{
      console.log(err);
    })

    axios.get('http://localhost:3888/api/paciente').then((response)=>{
      pacientes = response.data;
      this.setState({pacientes: pacientes});
      console.log(pacientes);
    }, (err) =>{
      console.log(err);
    })




  }

  handlePacienteChange(event){
    this.setState({paciente: event.target.value});
  }

  handleValorChange(event){
    this.setState({valor: event.target.value});
  }

  handleSelectEvent(evento){

    this.setState({citaActiva: evento, isActive: true});
    console.log(evento);
  }

  handleSlotEvent(objeto){
    console.log(objeto);
  }

  closeModal(){
    this.setState({isActive: false});
  }

  asignarCita(){

    var cita = this.state.citaActiva;
    var citas;
    if(this.state.paciente == "" || this.state.valor == ""){
      alert("Ingresa la informacion requerida");
      return;
    }

    cita.paciente = this.state.paciente;
    cita.valor = this.state.valor;
    cita.estado = "Asignada"

    axios.put("http://localhost:3888/api/cita/"+cita.idCita+"/paciente/"+cita.paciente,cita).then((response)=>{
      axios.get('http://localhost:3888/api/cita').then((response)=>{
        citas = response.data;
        citas = citas.filter(function(item){
          return item.estado  == "Disponible"
        });

        for (var i = 0; i < citas.length; i++) {
          citas[i].title = citas[i].estado + citas[i].hora;
        }

        this.setState({citasDisponibles: citas, isActive: false});
        alert("Cita asignada");

      }, (err) =>{
        console.log(err);
      })
    }, (err) => {
      console.log(err)
    })


  }

  MakeOption = function(X){
    return <option value={X}>{X}</option>
  }


  render(){

    var calendarClass = classNames({
      'oculto': this.state.isActive
    })



    return(
      <div>
        <BigCalendar
          className={calendarClass}
          events={this.state.citasDisponibles}
          startAccessor='fecha'
          endAccessor='fecha'
          onSelectEvent={(evento) => this.handleSelectEvent(evento)}
          selectable={true}
        />

        <Modal
        isOpen={this.state.isActive}
        >
          <h1>Cita</h1>
          <p>Doctor: {this.state.citaActiva.doctor}</p><br/>
          <p>Horario: {this.state.citaActiva.hora}</p><br/>

          <label>Documento paciente</label><br/>
          <input type="text" name="paciente" value={this.state.paciente} onChange={this.handlePacienteChange}/><br/>
          <label>Valor cita</label><br/>
          <input type="number" name="valor" value={this.state.valor} onChange={this.handleValorChange}/><br/><br/>

          <button onClick={this.asignarCita}>Asignar cita</button><button onClick={this.closeModal}>Cerrar</button>

        </Modal>

        </div>

    );
  }
}
