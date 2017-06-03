import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './CitasRegistradas'
import styles from 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios';


BigCalendar.momentLocalizer(moment);




export default class Agendar extends Component{


  constructor(){
    super();
    this.state = {
      citasDisponibles: Array()
    }
  }

  getCitasDisponibles(){
    var citas;
    axios.get('http://localhost:3888/api/cita').then((response)=>{
      citas = response.data;

      console.log(citas);
    }, (err) =>{
      console.log(err)
    })

    this.setState({citas: citas});

    citas = citas.filter(function(item){
      return item.estado  == "Disponible"
    });

    this.setState({citasDisponibles: citas});

  }


  handleSelectEvent(evento){
    console.log(evento);
  }

  handleSlotEvent(objeto){
    console.log(objeto);
  }

  render(){

    this.getCitasDisponibles();

    return(

        <BigCalendar
          events={this.state.citasDisponibles}
          startAccessor='fecha'
          endAccessor='fecha'
          onSelectEvent={(evento) => this.handleSelectEvent(evento)}
          selectable={true}
        />

    );
  }
}
