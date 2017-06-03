import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './CitasRegistradas'
import styles from 'react-big-calendar/lib/css/react-big-calendar.css'


BigCalendar.momentLocalizer(moment);

export default class Agendar extends Component{
  render(){
    return(

        <BigCalendar
          events={events}
          startAccessor='fecha'
          endAccessor='fecha'
        />

    );
  }
}
