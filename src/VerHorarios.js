import React, { Component } from 'react';


export default class VerHorarios extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.horario.identificacionHor} </td>
					<td>{this.props.horario.nombre} </td>
					<td>{this.props.horario.apellido}</td>
				  <td>{this.props.horario.email}</td>
          <td>{this.props.horario.dia}</td>
          <td>{this.props.horario.entrada}</td>
          <td>{this.props.horario.salida}</td>
			</tr>
			);
	}
}
