import React, { Component } from 'react'


export default class pacienteIndividual extends Component{
	
	render(){
		console.log(this.props.paciente.id);
		return(
			<tr>	
					<td>{this.props.paciente.id} </td>
					<td>{this.props.paciente.nombre} </td>
					<td>{this.props.paciente.apellido} </td>
					<td>{this.props.paciente.direccion} </td>
					<td>{this.props.paciente.telefono} </td>
					<td>{this.props.paciente.ocupacion} </td>
					<td>{this.props.paciente.nacimiento} </td>
					<td>{this.props.paciente.edad} </td>
					<td>{this.props.paciente.genero} </td>

			</tr>
			);
	}
}