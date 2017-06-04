import React, { Component } from 'react'


export default class CitaIndividual extends Component{
	
	render(){

		return(
			<tr>	
					<td>{this.props.cita.id} </td>
					<td>{this.props.cita.fecha} </td>
					<td>{this.props.cita.hora} </td>
					<td>{this.props.cita.doctor} </td>
					<td>{this.props.cita.paciente} </td>
					<td>{this.props.cita.duracion} </td>
					<td>{this.props.cita.valor} </td>
					<td>{this.props.cita.estado} </td>

			</tr>
			);
	}
}	
